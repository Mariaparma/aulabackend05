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