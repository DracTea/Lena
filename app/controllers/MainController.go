package app

import "witch/types"

func IndexGet(ctx types.Context) error {
	props := map[string]string{"message": "Hello, World!"}

	return ctx.Tmpl("index", props)
}

func AboutGet(ctx types.Context) error {
	return ctx.Json(map[string]string{"message": "About!"})
}
