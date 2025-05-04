package foundation

import (
	"reflect"
	"witch/types"
)

func ResourceName(t any) string {
	return reflect.TypeOf(t).String()
}

func GetModule[T any](ctx types.Context, name string) *T {
	return ctx.GetModule(name).(*T)
}
