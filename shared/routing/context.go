package routing

import (
	"context"
	"encoding/json"
	"net/http"
	"witch/types"
)

type Response struct {
	headers map[string]string
	status  int
	body    []byte
	handle  bool
}

type Context struct {
	server  types.Server
	session types.Session
	ret     *Response
	req     *http.Request
	wrt     http.ResponseWriter
	ctx     context.Context
}

func (c *Context) SetSession(session types.Session) {
	c.session = session
}

func (c *Context) Json(data any) error {
	c.ret.headers["Content-Type"] = "application/json; charset=utf-8"
	c.ret.body, _ = json.Marshal(data)

	return nil
}

func (c *Context) Tmpl(name string, data any) error {
	c.ret.headers["Content-Type"] = "text/html; charset=utf-8"
	c.ret.body, _ = json.Marshal(data)

	return nil
}

func (c *Context) Html(html []byte) error {
	c.ret.headers["Content-Type"] = "text/html; charset=utf-8"
	c.ret.body = html
	return nil
}

func (c *Context) Error(err error) error {
	c.ret.headers["Content-Type"] = "text/plain"
	c.ret.body = []byte(err.Error())
	return nil
}

func (c *Context) Send() {
	if !c.ret.handle {
		return
	}

	for k, v := range c.ret.headers {
		c.wrt.Header().Set(k, v)
	}

	c.wrt.WriteHeader(c.ret.status)
	c.wrt.Write(c.ret.body)
}

func (c *Context) GetServer() types.Server {
	return c.server
}

func NewContext(server types.Server, w http.ResponseWriter, r *http.Request) *Context {
	c := &Context{
		server:  server,
		session: nil,
		ret: &Response{
			headers: make(map[string]string),
			status:  200,
			body:    []byte{},
			handle:  true,
		},
		req: r,
		wrt: w,
		ctx: context.Background(),
	}

	return c
}
