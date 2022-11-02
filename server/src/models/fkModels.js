import { poolConnect } from "../../poolConnect.js"


const con = await poolConnect()

export class FKPosImg{
    constructor(postID, imgID){
        if(postID == '' || postID == null || postID == undefined){
            this.postID = ''
        }else{
            this.postID = postID
        }

        if(imgID == '' || imgID == null || imgID == undefined){
            this.imgID = ''
        }else{
            this.imgID = imgID
        }
    }

    async insert(){
        try {
            const { rowsAffected } = con.query(`insert into posImg values(${this.postID}, ${this.imgID}, 1)`)

            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error) 
        }
        
    }

}

export class FKPosGen{
    constructor(postID, genID){
        if(postID == '' || postID == null || postID == undefined){
            this.postID = ''
        }else{
            this.postID = postID
        }

        if(genID == '' || genID == null || genID == undefined){
            this.genID = ''
        }else{
            this.genID = genID
        }
    }

    async insert(){
        try {
            const { rowsAffected } = con.query(`insert into genPos values(${this.postID}, ${this.genID}, 1)`)
            return rowsAffected
        } 
        catch (error) 
        {
            console.log('error model ' + error)
            return (error) 
        }
        
    }
}

export class Comentario{
    constructor(){

    }
}

export class FavLike{
    constructor(){

    }
}