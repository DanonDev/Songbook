import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()


mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUUSER,
    password: process.env.DPPASSWD,
    database: process.env.DBNAME
})

connection.connect()