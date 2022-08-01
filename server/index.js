const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"testes"
})

app.use(cors())
app.use(express.json())

app.get('/',(req, res)=>{
   
    let SQL = "insert into usuar(email, fkImg, insertDate, modDate, nome, nomePlum, senha, statusUser) values('teste@gmail.com', '1', '30/07/2022','','Mer','','123', 1) "    
    
    db.query(SQL, (err,result)=>{
        console.log(err)
    })

})

app.listen(3001, ()=>{
    console.log('rodando server')
})
