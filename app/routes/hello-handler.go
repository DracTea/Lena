package routes

import "lena"

func HelloHandler(c *lena.Context) error {

	c.Json(map[string]any{
		"status": 200,
	})

	return nil
}
