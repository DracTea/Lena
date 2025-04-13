package lena

type Chain struct {
	constructors []Middleware
}

func New(constructors ...Middleware) Chain {
	return Chain{append(([]Middleware)(nil), constructors...)}
}

func (c Chain) Then(h HandlerFunc) HandlerFunc {
	for i := range c.constructors {
		h = c.constructors[len(c.constructors)-1-i](h)
	}

	return h
}

func (c Chain) Append(constructors ...Middleware) Chain {
	newCons := make([]Middleware, 0, len(c.constructors)+len(constructors))
	newCons = append(newCons, c.constructors...)
	newCons = append(newCons, constructors...)

	return Chain{newCons}
}

func (c Chain) Extend(chain Chain) Chain {
	return c.Append(chain.constructors...)
}
