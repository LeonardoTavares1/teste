import { useState } from 'react'
import { All } from '../../Style/all';
import { Button } from '../Components/buttons/buttons';
import { Inputs } from '../Components/inputs/inputs';
import { Cadastrar } from './style';
import Axios from 'axios';

export function Cadastro(){

    const[values, setValues] = useState();
    
    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const HandleClickButton = () =>{
        console.log(values)
        const current = new Date()
        const data = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`

        Axios.post('http://localhost:3001/usuario/insert',{
        nome:values.nome,
        email:values.email,
        senha:values.senha,
        insertDate: data}).then((response)=>(console.log(response)))
        
    };

    return(
        <>

            <All>
                <Cadastrar>
                    <h1>Crie sua conta</h1>


                    <Inputs seletor={1} id="nome" name="nome" type="text" placeholder="Nome completo" onChange={HandleChangeValues}/>

                    <Inputs seletor={2} id="email" name="email" type="email" placeholder="Seu email" onChange={HandleChangeValues} />

                    <Inputs seletor={3} id="senha" name="senha" type="password" placeholder="Senha" onChange={HandleChangeValues}/>

                    <Button type="submit" onClick={() => HandleClickButton()} texto="Cadastrar"/>

                </Cadastrar>
            </All>
        </>
    )
}