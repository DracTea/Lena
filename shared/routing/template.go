package routing

import (
	"encoding/json"
	"os"
	"strings"
	"witch/types"
)

type Tmpl struct {
	cache map[string]string
}

func (t *Tmpl) Layout() string {
	// check if template is already cached
	if val, ok := t.cache["default"]; ok {
		return val
	}

	// get template file
	file, err := os.ReadFile("var/views/app.html")
	if err != nil {
		return "[.content]"
	}

	content := string(file)
	vite := Vite()

	content = strings.Replace(content, "{{.vite}}", string(vite), -1)
	t.cache["default"] = content
	return t.cache["default"]
}

func (t *Tmpl) Render(c types.Context, tmpl string, props any) error {
	header := c.GetHeader("Accept")
	dt := map[string]any{"template": tmpl, "props": props}

	// if inertia request, return json response
	if header == "application/json" {
		return c.Json(dt)
	}

	data, err := json.Marshal(dt)
	if err != nil {
		return err
	}

	content := t.Layout()
	content = strings.Replace(content, "[.content]", string(data), -1)

	c.Html([]byte(content))
	return nil
}

func NewTmpl() *Tmpl {
	return &Tmpl{
		cache: make(map[string]string),
	}
}
