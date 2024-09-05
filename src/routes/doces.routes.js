import { Router } from "express";

const docesRoutes = Router();

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

docesRoutes.get("/", (rec, res) => {
    return res.status(201).send(guloseimas)
});

docesRoutes.post("/", (rec, res) => {
    const {nome, preco} = req.body;

    const novoDoce = {
        id: guloseimas.length + 1,
        nome: nome,
        preco: preco,
    };

guloseimas.push (novoDoce);
return res.status(200).send(guloseimas)
});

export default docesRoutes;