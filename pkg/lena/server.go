package lena

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

type Server struct {
	options   map[string]any
	modules   map[string]any
	exception func(c *Context, e error)
	router    *Router
	// database  *Database
}

func (s *Server) AddModule(name string, module any) {
	fmt.Println("Adding module:", name)
	s.modules[name] = module
}

func (s *Server) GetModule(name string) (any, bool) {
	val, ok := s.modules[name]
	return val, ok
}

// func (s *Server) InitDatabase() {
// 	s.database = NewDatabase()
// }

// func (s *Server) GetDatabase() *Database {
// 	return s.database
// }

func (s *Server) Boostrap(function func(*Server)) {
	function(s)
}

func (s *Server) WithRouting(fn func(*Router)) {
	fn(s.router)
}

func (s *Server) WithException(fn func(c *Context, err error)) {
	s.exception = fn
}

func (s *Server) Exception(c *Context, err error) {
	s.exception(c, err)
}

func (s *Server) Serve() {
	fmt.Println("Server is running on port:", s.options["port"])
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", s.options["port"]), s.router.GetMux()))
}

func NewServer() *Server {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}

	s := &Server{
		options:   make(map[string]any),
		modules:   make(map[string]any),
		exception: func(c *Context, e error) {},
	}

	var notfound HandlerFunc = func(ctx *Context) error {
		ctx.Error(errors.New("not found"))
		return nil
	}

	s.router = NewRouter(s, notfound)
	s.options["port"] = os.Getenv("APP_PORT")

	if os.Getenv("APP_ENV") == "local" {
		s.router.Public()
	}

	return s
}
