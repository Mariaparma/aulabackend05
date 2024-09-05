import { Router } from "express";

const docesRoutes = Router();

let guloseimas = [
  {
    id: 1,
    nome: "Trufa",
    preco: 8.5,
  },
  {
    id: 2,
    nome: "Jujuba",
    preco: 3.5,
  },
  {
    id: 3,
    nome: "Torta de limão",
    preco: 12.9,
  },
];

//rota para buscar todos os elementos do array guloseimas
docesRoutes.get("/", (rec, res) => {
  return res.status(201).send(guloseimas);
});

// rota para criar nova guloseimas
docesRoutes.post("/", (rec, res) => {
  const { nome, preco } = req.body;

  const novoDoce = {
    id: guloseimas.length + 1,
    nome: nome,
    preco: preco,
  };

  guloseimas.push(novoDoce);

  return res.status(200).send(guloseimas);
});

//rota para buscar um elemento especifico do array guloseimas
docesRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    //console.log(id);

    const guloseima = guloseimas.find( (doce) => doce.id === Number(id)  );

    if (!guloseima) {
        return res.status(404) .send ( { menssage: "Guloseima não encontrada!" });
    }

    return res.status(200).send (guloseima);
});

//rota para editar uma guloseima
docesRoutes.put("/:id", (req, res) => {
    const  { id }  = req.params

    const guloseima = guloseimas.find( (doce) => doce.id === Number(id)  );

    if (!guloseima) {
        return res.status(404) .send ( { message: "Guloseima não encontrada!" });
    }

    const { nome, preco } = req.body;
    guloseima.nome = nome
    guloseima.preco = preco
    return res.status(200).send ({ message: "Guloseima atualizada", guloseima})
});

// Rota para deletar um guloseima
docesRoutes.delete("/:id", (req, res) =>{
  const { id } = req.params

  const guloseima = guloseimas.find( (doce) => doce.id === Number(id)  );
  
  if (!guloseima) {
    return res.status(404) .send ( { message: "Guloseima não encontrada!" });
}

  guloseimas = guloseimas.filter((doce) => doce.id !== Number(id) );

  return res.status(200).send({
    message: "Guloseima Deletada!",
    guloseima ,
  })
})

export default docesRoutes;