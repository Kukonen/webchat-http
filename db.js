// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: "postgres",
//     password: "admin",
//     host: "localhost",
//     port: 5432,
//     database: "messenger"
// })

// module.exports = pool

const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'admin',
  database: "messenger"
})

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })

  module.exports = client;