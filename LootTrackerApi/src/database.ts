import {Sequelize} from "sequelize-typescript"
import config from "./config"

console.log("Attempting to connect to DB")

export const sequelize = new Sequelize(
    {
        dialect: "postgres",
        database: config.POSTGRESQL_DATABASE,
        username: config.POSTGRESQL_USERNAME,
        password: config.POSTGRESQL_PASSWORD,
        logging: false,
        modelMatch: (filename: any, member: any) => {
            return filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
        }
    })

sequelize.addModels([])

const gracefulExit = () => {
    sequelize.connectionManager.close().then(() => {
        console.log("shut down gracefully")
        process.exit(0)
    })
}

// If the Node process ends, close the mongoose connection
process.on("SIGINT", gracefulExit).on("SIGTERM", gracefulExit)
