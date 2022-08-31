import mysql from 'mysql';
import { dbConfig } from './database.js';

export async function conexaoTeste(){

    const pool = await mysql.createConnection(dbConfig)

    pool.connect(dbConfig)

    pool.on('error', err =>{
        console.log('dbTeste err: '+ err)
        return false
    })

    try {
        if (pool._connectCalled == true){
            console.log('Banco jóia')
            return true
            pool.end()
        }else{
            console.log('Erro na conexão ' + pool)
            pool.end()
            return false
        }
    }
    catch (error) 
    {
        pool.end()
    }

}