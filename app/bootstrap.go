package app

import (
	"lena"
)

func Boostrap(s *lena.Server) {
	//s.WithException(routes.Excetion)
	s.AddModule("db", lena.NewDatabase())
	s.AddModule("tmpl", lena.NewTmpl())
}
