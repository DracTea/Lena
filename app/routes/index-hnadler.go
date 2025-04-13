package routes

import "lena"

func IndexHandler(c *lena.Context) error {
	props := map[string]any{
		"page": map[string]string{
			"title": "Introduction",
		},
	}

	c.Tmpl("homepage", props)
	return nil
}
