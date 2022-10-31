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
            })))

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
            window.location.replace('/Login', {replace: true})
        
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

    async MemesTest(){
        window.location.replace('/Sobre')
    }

    
}