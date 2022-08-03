import express from 'express';
import mysql from 'mysql'
import { dbConfig } from './database.js';
const routes = express.Router();

const app = express()
const db = mysql.createConnection(dbConfig)

routes.get("/", (req, res) => {
    return res.status(200).send("Server running");
})

routes.post('/register',(req, res)=>{
   
    const { nome } = req.body;
    const { email } = req.body;
    const { senha } = req.body;
    const { type } = req.body;
    const { dia } = req.body;
    

    let SQL = "insert into usuar(email, fkImg, insertDate, modDate, nome, nomePlum, senha, statusUser) values(?, '1', ?,'',?,'',?, ?) "    
    
    db.query(SQL,[email, dia, nome, senha, type], (err,result)=>{
        console.log(err)
    })

    //db.end(console.log('finalizado a ligação'))

})

    

export { routes }