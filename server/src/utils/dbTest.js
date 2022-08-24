import mysql from 'mysql';
import { dbConfig } from './database.js';

export async function conexaoTeste(){

    const pool = await mysql.createConnection(dbConfig)
    
    pool.on('error', err =>{
        console.log('dbTeste err: '+ err)
        return false
    })

    

    try {
        pool.connect(function(err) {
            if (err) {
              return console.error('error: ' + err.message);
              return false
            }
          
            console.log('Connected to the MySQL server.');
            return true
          })
    }
    catch (error) 
    {
        pool.end()
    }

}