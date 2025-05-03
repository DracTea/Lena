package middlewares

import (
	"witch/routing"
	"witch/types"
)

func Session(next types.HandlerFunc) types.HandlerFunc {
	return func(ctx types.Context) error {
		session, err := routing.NewSession(ctx)
		if err != nil {
			return err
		}

		ctx.SetSession(session)
		return next(ctx)
	}
}
