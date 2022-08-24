
//Não foi passado para MVC o código. Tudo estará na pasta 'index.js' por enquanto.

import express from 'express';
import mysql from 'mysql'
import { dbConfig } from './src/utils/database.js';
const routes = express.Router();

const app = express()
const db = mysql.createConnection(dbConfig)

routes.get("/", (req, res) => {
    return res.status(200).send("Server running");
})

routes.post('/register')

    

export { routes }