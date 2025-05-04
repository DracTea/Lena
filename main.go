package main

import (
	app "app/controllers"
	"witch/foundation"
	"witch/modules"
	"witch/routing"
	"witch/types"
)

func main() {
	server := foundation.Bootstrap()

	server.WithBooting(func(s types.Server) {
		server.SetModule("db", modules.NewDatabase())
		server.SetModule("tmpl", routing.NewTmpl())
	})

	server.WithRouting(func(r *routing.Router) {
		r.Add("/", *routing.Get(app.IndexGet))
		r.Add("/about", *routing.Get(app.AboutGet))
	})
	server.Serve()
}
