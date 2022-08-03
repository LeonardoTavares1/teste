import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import { dbConfig } from './database.js'
import { routes } from './routes.js'

const app = express()


app.use(cors())
app.use(express.json())

app.use(routes)


app.use(express.urlencoded({
    extended : true,
}),
);


app.listen(3001, ()=>{
    console.log('rodando server')
})
