import Axios from 'axios'
import { useState } from 'react'
import { getToken, Token } from '../../services/auth'
import { AxiosUser } from '../../services/axios'
import { Data } from '../../services/utils'
import { All } from '../../Style/all'
import { Cadastrar } from '../Cadastro/style'
import { Button } from '../Components/buttons/buttons'
import { Inputs } from '../Components/inputs/inputs'

export function Update() {
    
    const[inf, setInf] = useState(getToken())
    
    const ChangeUpdate = (value) =>{
        setInf(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    return(
        <All>
            <Cadastrar>
                <Inputs id="nome" name="nome" type="text" placeholder="Nome" onChange={ChangeUpdate} />

                <Inputs id="email" name="email" type="email" placeholder="Email" onChange={ChangeUpdate} />
                <Inputs id="senha" name="senha" type="password" placeholder="Senha" onChange={ChangeUpdate} />
                <Button type='button' onClick={() => new AxiosUser().axiosAlter(inf)} texto="Confirmar" ></Button>
                <Button type='button' onClick={() => window.location.replace(`Perfil/../${getToken().nome}`, {replace: true})} texto="Cancelar" ></Button>
            </Cadastrar>
        </All>
    )
}