package app

import "witch/types"

func LoginGet(ctx types.Context) error {
	return ctx.Json(map[string]string{"message": "Hello, World!"})
}

func RegisterGet(ctx types.Context) error {
	return ctx.Json(map[string]string{"message": "Register!"})
}

func LogoutGet(ctx types.Context) error {
	return ctx.Json(map[string]string{"message": "Logout!"})
}
