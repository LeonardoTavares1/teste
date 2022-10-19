import Axios  from "axios"
import { AppContext } from "./Context"

const port = 3001

const localhost = `http://localhost:${port}`


export class AxiosUser{

    async axiosGet(){
        Axios.get('http://localhost:3001/usuario/get').then((response) => {
            setUsuarios(response.data)
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

    MemesTest(){
        window.location.replace('/Sobre')
    }
}