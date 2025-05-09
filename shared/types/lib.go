package types

import (
	"net/http"
)

type Session interface {
}

type Context interface {
	Json(data any) error
	Html(html []byte) error
	Tmpl(name string, data any) error
	Error(err error) error
	SetSession(session Session)
	GetModule(name string) any
	GetServer() Server
	GetHeader(key string) string
	Send()
}

type Router interface {
	GetMux() *http.ServeMux
	Public()
}

type Server interface {
	GetModule(name string) any
	SetModule(name string, module any)
}

type Database interface {
	Get(query string, args []any, dest any) error
}

type Template interface {
	Render(c Context, tmpl string, props any) error
}

type HandlerFunc func(ctx Context) error
type Middleware func(next HandlerFunc) HandlerFunc
