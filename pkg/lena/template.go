package lena

import (
	"os"

	"github.com/osteele/liquid"
)

type Template interface {
	Render(template string, props map[string]any) (string, error)
	Layout() string
}

type Tmpl struct {
	cache  map[string]string
	engine *liquid.Engine
}

func (t *Tmpl) Layout() string {
	tmpl := "guest-layout"
	if _, ok := t.cache[tmpl]; ok {
		return t.cache[tmpl]
	}

	file, err := os.ReadFile("storage/views/" + tmpl + ".liquid")
	if err != nil {
		return ""
	}

	t.cache[tmpl] = string(file)
	return t.cache[tmpl]
}

func (t *Tmpl) Render(template string, props map[string]any) (string, error) {
	out, err := t.engine.ParseAndRenderString(template, props)
	return out, err
}

func NewTmpl() *Tmpl {
	return &Tmpl{
		cache:  make(map[string]string),
		engine: liquid.NewEngine(),
	}
}
