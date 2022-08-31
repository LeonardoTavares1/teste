//SCRUM MASTER: Não foi possível implementar o CRUD por completo dentro do nosso site, está faltando o update e delete.
//SCRUM MASTER: Dos membros, o que mais teve atividade dentro do site foi o Leandro Giacomini, porém ele teve auxílio dos demais, que participaram tanto na realização dos testes.

import express, { response } from 'express'
import mysql from 'mysql'
import cors from 'cors'
import { dbConfig } from './database.js'
//import bcrypt from 'bcrypt'

const app = express()
const db = mysql.createPool(dbConfig)
//const saltRounds = 10;

app.use(cors())
app.use(express.json())


/* Ali em cima tem o básico do express, que a gente já viu na aula do bruno.
a unica diferença é que existe a variável "db" que armazena pool do banco. dbConfig são as informações do banco que
estão separadas em um documento */

/* 'user/register' é a rota de registro dentro do banco */

app.post('/user/register', (req, res)=>{
    
    /* essa é a rota que o Axios está enviando as informações, de inicio temos as variáveis sendo capturadas como constantes */

    const { nome, email, senha, type, dia } = req.body;

    /* os "?" dentro da string é para servirem como "variáveis". Em resumo, são as informações que serão trazidas pelo axios */

    /* Nota nova: Essa monstruosidade aqui abaixo está conferindo se existe algum registro com email repetido,
    caso não tenha, ela insere um usuário no banco, se não ela não faz nada (por enquanto)
    e também eu retirei a variável "Let", pois ela não servia para nada no fim, bastava colocar a string
    no primeiro elemento da query*/ 

    db.query('SELECT * FROM usuar WHERE email = ?', [email], (err, result)=>{
        if (err){
            res.send(err);
        } 
        if (result.length == 0){
            db.query("INSERT INTO usuar(email, fkImg, insertDate, modDate, nome, nomePlum, senha, statusUser) VALUES(?, '1', ?,'',?,'',?, ?)",
                [email, dia, nome, senha, type], 
                (err,result)=>{
                    if (err){
                        console.log(err)
                    } else res.send({msg: "usuario cadastrado"})
                })
        }else res.send({msg: "Usuário já cadastrado"})
    })
    
    
    /* db é a variável onde está a pool do banco. 
    
    ".query" serve para abrir uma query dentro do banco. "SQL" é a string
    acima, que contém o insert. 
    
    O conteúdo entre colchetes são as variáveis trazidas pelo axios, que serão inseridas no lugar dos "?", 
    dentro da string. 
    
    "(err, result)" serve para, caso aconteça algum erro, o terminal mostrará para nós, caso não aconteça,
    ele retorna "Null" */


})




app.post('/login', (req, res) =>{
    const { email, senha } = req.body;

    /* quase o mesmo do registro, mas aqui ele confere se o usuário existe no banco de dados, se ele existir, retorna os valores de ID, senha e email.
    os valores são retornados como array. Cada registro no banco conta como 1 array. se não encontrar ele devolve "Usuario não encontrado."

    res.sen(result) envia o resultado de senha, email e id para o front end, lá ele é avaliado e loga
    
    creio que exista um método mais funcional de fazer isso, mas deixarei assim por enquanto.*/

    db.query('SELECT email, senha, userID FROM usuar WHERE email = ? and senha = ?',[email, senha], (err, result)=>{
        if (err) {
            req.send(err)
        }
        if(result.length > 0) {
            res.send(result)
        }else{
            res.send({msg:"Usuário não encontrado"})
        }

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
