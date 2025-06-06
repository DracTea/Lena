package modules

import (
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)

type Database struct {
	Pool *sqlx.DB
	ID   int16
}

func (db *Database) Get(query string, args []any, dest any) error {
	err := db.Pool.Get(dest, query, args...)
	return err
}

func NewDatabase() *Database {
	pool, err := sqlx.Connect("mysql", os.Getenv("DB_URL"))
	if err != nil {
		panic(err)
	}

	//defer conn.Close()
	return &Database{ID: 0, Pool: pool}
}
