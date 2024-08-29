import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

const guloseimas = [
    {
        id:1, 
        nome: "Trufa",
        preco: 8.50,
    },
    {
        id: 2,
        nome: "Jujuba",
        preco: 3.50
    },
    {
        id:3,
        nome:"Torta de limão",
        preco:12.90
    },
];

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

app.get("/", (rec, res) => {
    return res.status(200).send({ message: "Hello, World!"})
});

app.get("/doces", (rec, res) => {
    return res.status(200).send(guloseimas)
});

app.post("/doces", (rec, res) => {
    const {nome, preco} = req.body;

    const novoDoce = {
        id: guloseimas.length + 1,
        nome: nome,
        preco: preco,
    }

    guloseimas.push (novoDoce);
    return res.status(200).send(guloseimas)
});

app.get("/filmes", (rec, res) => {
    return res.status(200).send(filmesMarcantes)
});


app.listen(port, () => {
    console.log ("😜 Server started on https://localhost:${port}")
})