import express from "express"
import config from "./config"
import {sequelize} from "./database"
import {errorHandler} from "./middlewares"
import HomeRouter from "./routes/homeRoutes"
import UserRoutes from "./routes/userRoutes"

const app = express()
let sequelizeForce = false
app.use(errorHandler)
app.use(express.json())

app.use("/api", HomeRouter, UserRoutes)

if (process.env.NODE_ENV === "development") {
    console.log("DEV MODE")
    sequelizeForce = true
}

sequelize.sync({
    force: sequelizeForce
}).then(() => {
    app.listen(config.PORT, () =>
        console.log(`Cheops-service listening on port ${config.PORT}!`)
    )
})
