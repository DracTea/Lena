package routing

import (
	"fmt"
	"log"
	"net/http"
	"slices"
	"strings"
	"witch/types"
)

type Router struct {
	prefix          string
	mux             *http.ServeMux
	server          types.Server
	chain           []types.Middleware
	notFoundHandler types.HandlerFunc
}

func (r *Router) wrap(fn types.HandlerFunc, mx []types.Middleware) (out http.Handler) {
	mx = append(slices.Clone(r.chain), mx...)

	out = http.HandlerFunc(func(wrt http.ResponseWriter, req *http.Request) {
		defer func() {
			if err := recover(); err != nil {
				log.Printf("Recovered from panic: %v\n", err)
				http.Error(wrt, "Internal Server Error", http.StatusInternalServerError)
			}
		}()

		ctx := NewContext(r.server, wrt, req)
		chain := New(mx...).Then(fn)

		err := chain(ctx)
		if err != nil {
			fmt.Println("Error in handler:", err.Error())
			ctx.Error(err)
		}

		ctx.Send()
	})

	return out
}

func (r *Router) GetMux() *http.ServeMux {
	return r.mux
}

func (r *Router) Add(path string, route Route) {
	url := route.Method + " " + r.prefix + path
	if strings.HasSuffix(path, "/") {
		url = url + "{$}"
	}

	r.mux.Handle(url, r.wrap(route.Fn, route.Middleware))
}

func NewRouter(server types.Server, handler types.HandlerFunc, mx ...types.Middleware) *Router {
	return &Router{
		mux:             http.NewServeMux(),
		server:          server,
		notFoundHandler: handler,
		chain:           mx,
		prefix:          "",
	}
}
