"use strict";
import express from "express";
import cors from "cors";
import morgan from "morgan";
//importacion de las rutas de los controladores
import * as routesController from "./api";

require("dotenv").config(); // para uso de variables de entorno

//Instanciamos express como servidor para emepzar a utilizar su potencia
const app = express();
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));
app.use(morgan("dev")); //middleware para ver por consola informacion de peticiones etc...
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.ALLOWORIGIN_URL); //Servidor que consume la API del servidor
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "DELETE,POST,GET,OPTIONS,PUT,PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Max-Age: 0");
  next();
});
app.use(cors());
app.use("/api/", routesController.vacantesRouter); 
app.use("/api/", routesController.ciudadanosRouter);
app.use("/api/", routesController.aplicacionesRouter);

const serverHttp = require("http").createServer(app);
export default serverHttp;
