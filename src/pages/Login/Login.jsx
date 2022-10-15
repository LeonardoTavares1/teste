import { useState } from 'react'
import { Inputs } from '../Components/inputs/inputs';
import { Cadastrar } from '../Cadastro/style';
import { Button } from '../Components/buttons/buttons';
import { All } from '../../Style/all';
import { AxiosUser } from '../../services/axios';

export function Login(){

    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const HandleClickButton = () =>{
        if(!values.email || !values.senha){
            console.error("Certifique de que preencheu todos os campos!");
        }else{
            new AxiosUser().axiosLogin(values.email, values.senha)
        }
    }

    return(
        <>
            <All>

                <Cadastrar>
                    <h1>Login</h1>
                    
                    <Inputs seletor={2} id="email" name="email" type="email" placeholder="Seu email" onChange={HandleChangeValues} />

                    <Inputs seletor={3} id="senha" name="senha" type="password" placeholder="Senha"  onChange={HandleChangeValues}/>
                    
                    <Button type="button" onClick={() => HandleClickButton()} texto="Enviar"/>
                    
                    <a type="submit" href="#">Esqueceu a senha?</a>
                    
                    <h4>Ainda não tem cadastro?</h4> 
                    
                    <a type="submit" href="/Cadastro">Crie uma conta!</a>
                </Cadastrar>

            </All>
        </>
    )
}
