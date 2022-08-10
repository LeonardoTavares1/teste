import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import { dbConfig } from './database.js'

const app = express()
const db = mysql.createPool(dbConfig)

app.use(cors())
app.use(express.json())

/* Ali em cima tem o básico do express, que a gente já viu na aula do bruno.
a unica diferença é que existe a variável "db" que armazena pool do banco. dbConfig são as informações do banco que
estão separadas em um documento */

/* 'user/register' é a rota de registro dentro do banco */

app.post('/user/register', (req, res)=>{
    
    /* essa é a rota que o Axios está enviando as informações, de inicio temos as variáveis sendo capturadas como constantes */

    const { nome, email, senha, type, dia } = req.body;

    /* let SQL armazena o insert dentro do banco. Esse insert será enviado como query para o phpmyadmin, criando uma inserção
    no banco.
    os "?" dentro da string é para servirem como "variáveis". Em resumo, são as informações que serão trazidas pelo axios */

    let SQL = "insert into usuar(email, fkImg, insertDate, modDate, nome, nomePlum, senha, statusUser) values(?, '1', ?,'',?,'',?, ?) "    
    
    /* db é a variável onde está a pool do banco. 
    
    ".query" serve para abrir uma query dentro do banco. "SQL" é a string
    acima, que contém o insert. 
    
    O conteúdo entre colchetes são as variáveis trazidas pelo axios, que serão inseridas no lugar dos "?", 
    dentro da string. 
    
    "(err, result)" serve para, caso aconteça algum erro, o terminal mostrará para nós, caso não aconteça,
    ele retorna "Null" */

    db.query(SQL,[email, dia, nome, senha, type], (err,result)=>{
        console.log(err)
    })
})


/* confesso que não sei a razão desse objeto abaixo */

app.use(express.urlencoded({
    extended : true,
}),
);


/* isso aqui inicia o servidor na porta 3001, devolvendo um 'rodando server' dentro do terminal como aviso */

app.listen(3001, ()=>{
    console.log('rodando server')
})
