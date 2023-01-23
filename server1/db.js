const { Pool } = require("pg")

// we can connect to db by simply using the following method
// const pool = new Pool()

// connection variables will automatically taken from .env file if we set variables as follows
// PGUSER=
// PGHOST=
// PGPASSWORD=
// PGDATABASE=
// PGPORT=

// since i am using cloud based db, i am connected using connection string method (i tried ssl approach but not worked as expected. since for learning purpose i dont want to spend much time)
const pool = new Pool({
  connectionString: process.env.connectionString
})

pool.connect()
  .then(c => console.log("connected db"))
  .catch(e => console.log("err", e))

module.exports = {
  query: (text, params) => {
    console.log(text)
    console.log(params)
    return pool.query(text, params)
  },
}