package app

import (
	"witch/types"
)

func IndexGet(ctx types.Context) error {
	props := map[string]string{"message": "Hello, World!"}

	return ctx.Tmpl("index", props)
}

func AboutGet(ctx types.Context) error {
	db := ctx.GetModule("db").(types.Database)

	user := struct {
		ID    int    `db:"id" json:"id"`
		Name  string `db:"name" json:"name"`
		Email string `db:"email" json:"email"`
	}{}

	err := db.Get("SELECT id,name,email FROM ap_users WHERE id = ?", []any{2}, &user)
	if err != nil {
		return ctx.Error(err)
	}

	return ctx.Json(map[string]any{
		"message": "About!",
		"rows":    user,
	})
}
