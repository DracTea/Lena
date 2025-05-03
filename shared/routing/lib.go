package routing

import (
	"reflect"
	"witch/types"
)

func resourceName(t any) reflect.Type {
	return reflect.TypeOf(t)
}

func PutModule[T any](ctx types.Context, resource *T) {
	name := resourceName(resource)
	ctx.GetServer().SetModule(name.String(), resource)
}

func GetModule[T any](ctx types.Context, name string) *T {
	return ctx.GetServer().GetModule(name).(*T)
}
