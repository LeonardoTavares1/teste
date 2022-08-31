import mysql from 'mysql'
import { dbConfig } from './database.js'

export async function dbCon(){
    try {
        const db = mysql.ConnectionPool(dbConfig)

        await db.connect(dbConfig)

        return db
    } 
    catch (error) 
    {
        return(error)
    }
}