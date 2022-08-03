import express from 'express';
import mysql from 'mysql'
import { dbConfig } from './database.js';
const routes = express.Router();

const db = mysql.createConnection(dbConfig)

routes.get("/", (req, res) => {
    return res.status(200).send("Server running");
})

routes.get('/register',(req, res)=>{
   
    let SQL = "insert into usuar(email, fkImg, insertDate, modDate, nome, nomePlum, senha, statusUser) values('teste6@gmail.com', '1', '30/07/2022','','Mer','','123', 1) "    
    
    db.query(SQL, (err,result)=>{
        console.log(err)
    })

    //db.end(console.log('finalizado a ligação'))

})

    

export { routes }