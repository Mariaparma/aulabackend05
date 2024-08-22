import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.get("/", (rec, res) => {
    return res.status(200).send({ message: "Hello, World!"})
})

app.listen(port, () => {
    console.log ('😜 Server started on https://localhost:${port}')
})