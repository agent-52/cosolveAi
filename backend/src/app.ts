import express from "express"
import { indexRouter } from "./routes"

export const app = express()
app.use(express.json())

app.use("/api", indexRouter)