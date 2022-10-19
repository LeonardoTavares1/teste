import { useState } from "react";
import { Cadastrar } from "../pages/Cadastro/style";
import { Button } from "../pages/Components/buttons/buttons";
import { Inputs } from "../pages/Components/inputs/inputs";
import { All } from "../Style/all";
import { getToken, Token } from "./auth";
import Axios from 'axios'

export function Data(){
    const current = new Date()
    const data = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    return data
}

export function Modal() {
    
    const[inf, setInf] = useState()


    const buttonAlt = () =>{

        const teste = {
            email: inf.email,
            fkImg: 1,
            insertDate: getToken().insertDate,
            modDate: Data(),
            nome: inf.nome,
            senha: inf.senha,
            statusUser: 1,
            userID: getToken().userID
        }
        

        Axios.put(`http://localhost:3001/usuario/update/${getToken().userID}`,{
            statusUser: 1,
            fkImg: 1,
            insertDate: getToken().insertDate,
            modDate: Data(),
            email: inf.email,
            nome: inf.nome,
            senha: inf.senha
        }).then(() =>{
            localStorage.removeItem(Token)
            localStorage.setItem(Token, JSON.stringify(teste))    
            window.location.replace(`/Perfil/${teste.nome}`)
        })
    }
    
    const ChangeUpdate = (value) =>{
        setInf(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const negar = () =>{
        window.location.replace(`Perfil/../${getToken().nome}`, {replace: true})
    }
        
    

    return(
        <All>
            <Cadastrar>
                <Inputs id="nome" name="nome" type="text" placeholder="Nome" onChange={ChangeUpdate} />

                <Inputs id="email" name="email" type="email" placeholder="Email" onChange={ChangeUpdate} />
                <Inputs id="senha" name="senha" type="password" placeholder="Senha" onChange={ChangeUpdate} />
                <Button type='button' onClick={() => buttonAlt()} texto="Confirmar" ></Button>
                <Button type='button' onClick={() => negar()} texto="Cancelar" ></Button>
            </Cadastrar>
        </All>
    )
}