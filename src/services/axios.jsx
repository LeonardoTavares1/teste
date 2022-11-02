import Axios  from "axios"
import { UserPage } from "../pages/UserPage/UserPage"
import { getToken, Token } from "./auth"
import { AppContext } from "./Context"
import { Data } from "./utils"

const port = '3001'

const localhost = `http://localhost:${port}`


export class AxiosUser{

    async axiosGet(nome){
        
        try {
            return (
                (Axios.post(`http://localhost:3001/usuario/getProfile`, {
                nome: nome
            })
            )
            )

        } 
        catch (error) 
        {
            return error
        }
        

    }
    
    async axiosIns(values){
        Axios.post('http://localhost:3001/usuario/insert',{
            nome:values.nome,
            email:values.email,
            senha:values.senha
        }).then(()=>{
        
        })
    }

    async axiosLogin(email, senha) {
        try{
            Axios.post(`${localhost}/usuario/login`, {
                    email: email,
                    senha: senha
                }).then((response) =>{
                    if(response.data.length){
                        if (email == response.data[0].email && senha == response.data[0].senha){
                            localStorage.setItem('UserConnection', JSON.stringify(response.data[0]))
                            window.location.replace('/', {replace: true})
                        } else{
                            AppContext.teste = false
                        }
                    }else{
                        alert('aaaa')
                    }
            })

        }catch(err){
           alert("AAAAAAAAAAAAAA")
        }

    }

    async axiosDel(){
        try {
            Axios.delete(`${localhost}/usuario/delete/${getToken().userID}`).then(()=>{
                localStorage.removeItem(Token)    
                window.location.replace('/', {replace: true})
            })
        }  
        catch (error) 
        {
            return error
        }
    }

    async axiosAlter(inf){
        try {
            const teste = {
                email: inf.email,
                fkImg: inf.fkImg,
                insertDate: getToken().insertDate,
                modDate: Data(),
                nome: inf.nome,
                senha: inf.senha,
                statusUser: inf.statusUser,
                userID: getToken().userID
            }
            
            console.log(teste)
            Axios.put(`${localhost}/usuario/update/${getToken().userID}`,{
                statusUser: 1,
                fkImg: 1,
                email: inf.email,
                nome: inf.nome,
                senha: inf.senha
            }).then(() =>{
                localStorage.removeItem(Token)
                localStorage.setItem(Token, JSON.stringify(teste))
                window.location.replace(`/Perfil/${teste.nome}`)
            })    
        } 
        catch (error) 
        {
            return error
        }
    }

    async axiosCreateImg(fileImg, config){
        const formData = new FormData()
        formData.append('file', fileImg)
        formData.append('name', fileImg.name)
        return((Axios.post(`${localhost}/img/insert`, formData, config)))
    }

    async axiosCreateLiv(filePdf, config){
        const formData = new FormData()
        formData.append('file', filePdf)
        formData.append('name', filePdf.name)

        return((Axios.post(`${localhost}/liv/insert`, formData, config)))
    }

    async axiosInsPost(text, livID){
        return((Axios.post(`${localhost}/post/insert`, {
            nome: text.nome,
            desc: text.desc,
            livID: livID,
            userID: getToken().userID
        })))
    }

    async axiosFKPosImg(postID, imgID){
        return((Axios.post(`${localhost}/FKPosImg/insert`, {
            postID: postID,
            imgID: imgID
        })))
    }

    async axiosFKPosGen(postID, genID){
        return((Axios.post(`${localhost}/FKPosGen/insert`, {
            postID: postID,
            genID: genID
        })))
    } 

    //Deus existe porque o codigo ali embaixo funciona.

    async axiosCreatePost(fileImg, filePDF, config, text, gen){
        
        const getImgID = await this.axiosCreateImg(fileImg, config)
        const imgID = getImgID.data[0].imgID
        console.log(imgID)
          
        const getLivID = await this.axiosCreateLiv(filePDF, config)
        const livID = getLivID.data[0].livID
        console.log(livID)
               
        const getPostID = await this.axiosInsPost(text, livID)
        const postID = getPostID.data[0].postID
        console.log(postID)

        this.axiosFKPosImg(postID, imgID)

        this.axiosFKPosGen(postID, gen)
                
            
       
        

    }

    async MemesTest(){
        window.location.replace('/Sobre')
    }

    
}