package lena

import (
	"fmt"
	"net/http"
	"os"
	"path"
	"path/filepath"
	"slices"
	"strings"
)

type HandlerFunc func(ctx *Context) error
type Middleware func(next HandlerFunc) HandlerFunc

type Router struct {
	prefix          string
	mux             *http.ServeMux
	server          *Server
	chain           []Middleware
	notFoundHandler HandlerFunc
}

func (r *Router) wrap(fn HandlerFunc, mx []Middleware) (out http.Handler) {
	mx = append(slices.Clone(r.chain), mx...)

	out = http.HandlerFunc(func(wrt http.ResponseWriter, req *http.Request) {
		ctx := NewContext(r.server, wrt, req)
		chain := New(mx...).Then(fn)

		err := chain(ctx)
		if err != nil {
			fmt.Println("Error in handler:", err)
		}

		ctx.Send()
	})

	return out
}

func (r *Router) Group(fn func(r *Router)) {
	g := Router{
		mux:             r.mux,
		server:          r.server,
		chain:           slices.Clone(r.chain),
		notFoundHandler: r.notFoundHandler,
		prefix:          r.prefix,
	}

	fn(&g)
}

func (r *Router) Mx(mx ...Middleware) {
	r.chain = append(r.chain, mx...)
}

func (r *Router) Prefix(pr string) {
	r.prefix = pr
}

func (r *Router) Add(path string, route Route) {
	url := route.Method + " " + r.prefix + path
	if strings.HasSuffix(path, "/") {
		url = url + "{$}"
	}

	r.mux.Handle(url, r.wrap(route.Fn, route.Middleware))
}

func (r *Router) Public() {
	r.mux.Handle(http.MethodGet+" "+"/public/{pathname...}", http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		publicDir := "./public"

		// Get the path after "/public/"
		pathname := strings.TrimPrefix(req.URL.Path, "/public/")
		// Clean the path to prevent directory traversal attacks
		cleanPath := path.Clean(pathname)
		filePath := filepath.Join(publicDir, cleanPath)
		fileInfo, err := os.Stat(filePath)
		if err != nil {
			if os.IsNotExist(err) {
				http.Error(w, "404 file not found", http.StatusNotFound)
				return
			}
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		// Don't serve directories directly
		if fileInfo.IsDir() {
			http.Error(w, "403 forbidden", http.StatusForbidden)
			return
		}

		// Serve the file
		http.ServeFile(w, req, filePath)

	}))
}

func (r *Router) GetMux() *http.ServeMux {
	return r.mux
}

func NewRouter(server *Server, handler HandlerFunc, mx ...Middleware) *Router {
	return &Router{
		mux:             http.NewServeMux(),
		server:          server,
		notFoundHandler: handler,
		chain:           mx,
		prefix:          "",
	}
}
