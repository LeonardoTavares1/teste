import { useState } from 'react'
import { All } from '../../Style/all';
import { Button } from '../Components/buttons/buttons';
import { Inputs } from '../Components/inputs/inputs';
import { Cadastrar } from './style';
import { AxiosUser } from '../../services/axios';

export function Cadastro(){

    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    return(
        <>

            <All>
                <Cadastrar>
                    <h1>Crie sua conta</h1>


                    <Inputs seletor={1} id="nome" name="nome" type="email" placeholder="Nome completo" onChange={HandleChangeValues}/>

                    <Inputs seletor={2} id="email" name="email" type="email" placeholder="Seu email" onChange={HandleChangeValues} />

                    <Inputs seletor={3} id="senha" name="senha" type="password" placeholder="Senha" onChange={HandleChangeValues}/>

                    <Button type="submit" onClick={() => new AxiosUser().axiosIns(values)} texto="Cadastrar"/>

                    <a type="submit" href="/">Home</a>

                </Cadastrar>
            </All>
        </>
    )
}