package main

import (
	"app"
	"lena"
)

func main() {
	server := lena.NewServer()
	server.Boostrap(app.Boostrap)

	server.WithRouting(func(r *lena.Router) {
		r.Group(app.Web)
		r.Group(app.Api)
	})

	server.Serve()
}
