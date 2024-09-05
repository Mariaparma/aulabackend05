import { Router } from "express";

import docesRoutes from "./doces.routes.js";

const routes = Router ();

routes.get("/", (rec, res) => {
    return res.status(200).send({ message: "Luan Santana é lindo"});
});

routes.use("/doces", docesRoutes);

export default routes

