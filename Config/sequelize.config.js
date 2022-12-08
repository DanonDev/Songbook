import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
    process.env.DBNAME,
    procces.env.DBUSER,
    process.env.DBPASSWD,
    {
        host: process.env.DBHOST,
        dialect: 'mysql'
    }
)

export { sequelize }