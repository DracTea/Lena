package routing

import "witch/types"

type Chain struct {
	constructors []types.Middleware
}

func New(constructors ...types.Middleware) Chain {
	return Chain{append(([]types.Middleware)(nil), constructors...)}
}

func (c Chain) Then(h types.HandlerFunc) types.HandlerFunc {
	for i := range c.constructors {
		h = c.constructors[len(c.constructors)-1-i](h)
	}

	return h
}

func (c Chain) Append(constructors ...types.Middleware) Chain {
	newCons := make([]types.Middleware, 0, len(c.constructors)+len(constructors))
	newCons = append(newCons, c.constructors...)
	newCons = append(newCons, constructors...)

	return Chain{newCons}
}

func (c Chain) Extend(chain Chain) Chain {
	return c.Append(chain.constructors...)
}
