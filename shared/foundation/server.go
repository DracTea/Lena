package foundation

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"witch/routing"
	"witch/types"

	"github.com/joho/godotenv"
)

type Server struct {
	Options   map[string]any
	Modules   map[string]any
	exception func(c *types.Context, e error)
	router    types.Router
}

func (s *Server) Serve() {
	fmt.Println("Server is running on port:", s.Options["port"])
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", s.Options["port"]), s.router.GetMux()))
}

func (s *Server) GetModule(name string) any {
	return s.Modules[name]
}

func (s *Server) SetModule(name string, module any) {
	s.Modules[name] = module
}

func (s *Server) WithException(fn func(*types.Context, error)) {
	s.exception = fn
}

func (s *Server) WithBooting(fn func(types.Server)) {
	fn(s)
}

func (s *Server) WithRouting(fn func(*routing.Router)) {
	fn(s.router.(*routing.Router))
}

func Bootstrap() *Server {
	var notfound types.HandlerFunc = func(ctx types.Context) error {
		return ctx.Error(errors.New("not found"))
	}

	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	s := &Server{
		Options:   make(map[string]any),
		Modules:   make(map[string]any),
		exception: func(c *types.Context, e error) {},
	}

	s.router = routing.NewRouter(s, notfound)
	s.Options["port"] = "8080"
	return s
}
