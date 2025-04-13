package lena

import (
	"context"
	"encoding/json"
	"net/http"
	"os"
	"strings"
)

type Response struct {
	headers map[string]string
	status  int
	body    []byte
}

type Context struct {
	server *Server
	ret    *Response
	req    *http.Request
	wrt    http.ResponseWriter
	ctx    context.Context
}

func NewContext(server *Server, w http.ResponseWriter, r *http.Request) *Context {
	return &Context{
		ret: &Response{
			headers: make(map[string]string),
			status:  200,
			body:    []byte{},
		},
		server: server,
		req:    r,
		wrt:    w,
		ctx:    context.Background(),
	}
}

func (c *Context) IP() string {
	if ip := c.req.Header.Get("X-Forwarded-For"); ip != "" {
		return ip
	}
	return c.req.RemoteAddr
}

func (c *Context) UserAgent() string {
	return c.req.UserAgent()
}

func (c *Context) GetServer() *Server {
	return c.server
}

func (c *Context) GetModules(name string) any {
	val, ok := c.server.GetModule(name)

	if name == "db" && ok {
		db := val.(*Database)
		db.SetContext(c.ctx)
		return db
	}

	if !ok {
		return nil
	}

	return val
}

func (c *Context) GetCookie(name string) (*http.Cookie, error) {
	cookie, err := c.req.Cookie(name)
	if err != nil {
		return nil, err
	}

	return cookie, nil
}

func (c *Context) AddCookie(cookie *http.Cookie) {
	if cookie == nil {
		return
	}

	http.SetCookie(c.wrt, cookie)
}

// Responses
func (c *Context) Text(text string) *Context {
	c.ret.headers["Content-Type"] = "text/plain"
	c.ret.body = []byte(text)

	return c
}

func (c *Context) Tmpl(tmpl string, props map[string]any) *Context {
	file, err := os.ReadFile("storage/views/" + tmpl + ".liquid")
	if err != nil {
		return c.Error(err)
	}

	tmp := c.GetModules("tmpl").(Template)
	content, err := tmp.Render(string(file), props)
	if err != nil {
		return c.Error(err)
	}

	layout := tmp.Layout()
	if layout != "" {
		content = strings.Replace(layout, "|content|", content, -1)
	}

	c.ret.headers["Content-Type"] = "text/html; charset=utf-8"
	c.ret.body = []byte(content)

	return c
}

func (c *Context) Inertia(tmpl string, props map[string]any) *Context {
	header := c.req.Header.Get("X-Inertia")

	dt := map[string]any{
		"template": tmpl,
		"props":    props,
	}

	// if inertia request, return json response
	if header == "0" {
		body, err := json.Marshal(dt)
		if err != nil {
			return c.Error(err)
		}

		c.ret.body = body
		return c
	}

	// get template file
	file, err := os.ReadFile("storage/views/index.html")
	if err != nil {
		c.Error(err)
		return c
	}

	data, err := json.Marshal(dt)
	if err != nil {
		c.Error(err)
		return c
	}

	content := string(file)
	content = strings.Replace(content, "{{.data}}", string(data), -1)

	c.ret.headers["Content-Type"] = "text/html; charset=utf-8"
	c.ret.body = []byte(content)
	return c
}

func (c *Context) Html(html []byte) *Context {
	c.ret.headers["Content-Type"] = "text/html; charset=utf-8"
	c.ret.body = html

	return c
}

func (c *Context) Error(err error) *Context {
	c.ret.headers["Content-Type"] = "text/plain"
	c.ret.body = []byte(err.Error())
	return c
}

func (c *Context) Json(data any) Context {
	c.ret.headers["Content-Type"] = "application/json; charset=utf-8"
	c.ret.body, _ = json.Marshal(data)

	return *c
}

func (c *Context) Send() {
	for k, v := range c.ret.headers {
		c.wrt.Header().Set(k, v)
	}

	c.wrt.WriteHeader(c.ret.status)
	c.wrt.Write(c.ret.body)
}
