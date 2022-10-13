import { useState } from 'react'
import { Inputs } from '../Components/inputs/inputs';
import { Cadastrar } from '../Cadastro/style';
import { Button } from '../Components/buttons/buttons';
import { All } from '../../Style/all';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { AppContext } from '../../variaveis/Context';

export function Login(){

    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const navigate = useNavigate()

    const HandleClickButton = () =>{
        Axios.post("http://localhost:3001/usuario/login", {
            email: values.email,
            senha: values.senha
        }).then((response) =>{
            if (values.email == response.data[0].email && values.senha ==  response.data[0].senha){
                AppContext.user = response
                
                navigate("/", {replace: true})
                
                

            }
        })
    }

    return(
        <>
            <All>

                <Cadastrar>
                    <h1>Login</h1>
                    
                    <Inputs seletor={2} id="email" name="email" type="email" placeholder="Seu email" onChange={HandleChangeValues} />

                    <Inputs seletor={3} id="senha" name="senha" type="password" placeholder="Senha"  onChange={HandleChangeValues}/>
                    
                    <Button type="submit" onClick={() => HandleClickButton()} texto="Enviar"/>
                    
                    <a type="submit" href="#">Esqueceu a senha?</a>
                    
                    <h4>Ainda não tem cadastro?</h4> 
                    
                    <a type="submit" href="/Cadastro">Crie uma conta!</a>
                </Cadastrar>

            </All>
        </>
    )
}
