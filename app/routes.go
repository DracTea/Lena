package app

import (
	"app/routes"
	"lena"
)

func Api(r *lena.Router) {
	r.Prefix("/api")
	r.Add("/hello", *lena.Get(routes.HelloHandler))
}

func Web(r *lena.Router) {
	r.Add("/", *lena.Get(routes.IndexHandler))
}
