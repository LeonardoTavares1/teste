import { dbCon } from "../utils/db.js"


export class Usuario{
    constructor(email, fkImg, insertDate, modDate, nome, nomePlum, senha, statusUser, id){
        this.nome = nome,
        this.img = fkImg,
        this.email = email,
        this.date = insertDate,
        this.mod = modDate,
        this.plum = nomePlum,
        this.senha = senha,
        this.status = statusUser
        this.id = id
    };

    static async get(){
        re
    }


};