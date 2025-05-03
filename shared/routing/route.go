package routing

import "witch/types"

type Route struct {
	Method     string
	Path       string
	Middleware []types.Middleware
	Fn         types.HandlerFunc
}

func Get(fn types.HandlerFunc) *Route {
	return &Route{Method: "GET", Path: "", Fn: fn, Middleware: []types.Middleware{}}
}

func Post(fn types.HandlerFunc) *Route {
	return &Route{Method: "POST", Path: "", Fn: fn, Middleware: []types.Middleware{}}
}

func (r *Route) Mx(m ...types.Middleware) *Route {
	r.Middleware = append(r.Middleware, m...)
	return r
}
