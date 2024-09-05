import express from "express"
import { config } from "dotenv"
import routes from "./routes/index.routes.js"

config()

const port = process.env.PORT || 3000

const app = express();
app.use(express.json());
app.use(routes);


const filmesMarcantes = [
   
    {
        id:1001,
        titulo: "Crepusculo",
        genero: "Romance",
        emCartaz: "False",
    },
    {
        id:1002,
        titulo: "Para todos os garotos que eu ja amei",
        genero: "Romance",
        emCartaz: "False",
    },
    {
        id:1001,
        titulo: "Simplesmente acontece",
        genero: "Romance",
        emCartaz: "False",
    },
]

app.listen(port, () => {
    console.log (`😜 Server started on https://localhost:${port}`)
})