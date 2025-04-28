import express from "express";
import cors from "cors";
import Alumno from "./src/models/alumno.js";
import { sumar, restar, multiplicar, dividir } from "./src/modules/matematica.js";
import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from "./src/modules/omdb-wrapper.js";
import ValidacionesHelper from "./src/modules/validaciones-helper.js";
import DateTimeHelper from "./src/modules/datetime-helper.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido", "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao", "32623391", 18));

// Endpoints básicos
app.get("/", (req, res) => {
    res.status(200).send("¡Ya estoy respondiendo!");
});

app.get("/saludar/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.status(200).send(`Hola ${nombre}`);
});

app.get("/validarfecha/:ano/:mes/:dia", (req, res) => {
    const { ano, mes, dia } = req.params;
    const fecha = Date.parse(`${ano}-${mes}-${dia}`);
    if (!isNaN(fecha)) {
        res.status(200).send("Fecha válida");
    } else {
        res.status(400).send("Fecha inválida");
    }
});

// Levantar servidor
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
