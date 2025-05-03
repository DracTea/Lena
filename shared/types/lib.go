package types

import "net/http"

type Session interface {
}

type Context interface {
	Json(data any) error
	Html(html []byte) error
	Tmpl(name string, data any) error
	Error(err error) error
	SetSession(session Session)
	GetServer() Server
	Send()
}

type Router interface {
	GetMux() *http.ServeMux
}

type Server interface {
	GetModule(name string) any
	SetModule(name string, module any)
}

type Database interface {
}

type HandlerFunc func(ctx Context) error
type Middleware func(next HandlerFunc) HandlerFunc
