package middlewares

import (
	"witch/types"
)

func Example(next types.HandlerFunc) types.HandlerFunc {
	return func(ctx types.Context) error {
		return next(ctx)
	}
}
