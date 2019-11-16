import express from "express"
import logger from "morgan"
import config from "./config"
import HomeRouter from "./routes/home.routes"

const app = express()

app.use("/api", HomeRouter)

if (process.env.NODE_ENV === "development") {
    console.log("DEV MODE")
    app.use(logger("dev"))
}
app.listen(config.PORT, () =>
    console.log(`Cv-service listening on port ${config.PORT}!`)
)
