package lena

type Route struct {
	Method     string
	Path       string
	Middleware []Middleware
	Fn         HandlerFunc
}

func Get(fn HandlerFunc) *Route {
	return &Route{Method: "GET", Path: "", Fn: fn, Middleware: []Middleware{}}
}

func Post(fn HandlerFunc) *Route {
	return &Route{Method: "POST", Path: "", Fn: fn, Middleware: []Middleware{}}
}

func (r *Route) Mx(m ...Middleware) *Route {
	r.Middleware = append(r.Middleware, m...)
	return r
}
