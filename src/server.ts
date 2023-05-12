/**
 * Café com Código - @2023
 * este é o arquivo inicial onde a aplicação recebe as requisições
 */

import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);
app.listen(3333, () => {
  console.log("SERVER ONLINE ON: " + 3333);
});
