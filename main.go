package main

import (
	app "app/controllers"
	"witch/foundation"
	"witch/routing"
)

func main() {
	server := foundation.Bootstrap()
	server.Init(func() {

	})

	server.WithRouting(func(r *routing.Router) {
		r.Add("/", *routing.Get(app.IndexGet))
		r.Add("/about", *routing.Get(app.AboutGet))
	})
	server.Serve()
}
