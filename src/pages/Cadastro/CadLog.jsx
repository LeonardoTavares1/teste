import { useState } from 'react'
import { All } from '../../Style/all';
import { Button } from '../Components/buttons/buttons';
import { DropFile, Inputs } from '../Components/inputs/inputs';
import { Adjust, AdjustImg, AdjustLogin, CadAlign, Cadastrar } from './style';
import { AxiosUser } from '../../services/axios';
import noProfile from '../../assets/noProfile.jpg'

export function Cadastro(){

    const[values, setValues] = useState();
    const[image, setImage] = useState(1)
    const[handleImg, setHandleImg] = useState(noProfile)

    const HandleChangeValues = (value) =>{
        setValues(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const GetImg = (value) =>{
        setImage(value.target.files[0]) 
        setHandleImg(URL.createObjectURL(value.target.files[0]))
    }

    return(
        <>

            <All>
                <CadAlign>
                    <Cadastrar>
                        <h1>Crie sua conta</h1>

                        <AdjustImg>
                            <img src={handleImg}/>
                        </AdjustImg>

                        <Adjust>
                            <DropFile 
                                id='imagem' 
                                name='imagem'  
                                type='file' 
                                accept='image/*' 
                                texto='Adicionar imagem de Perfil' 
                                onChange={GetImg}
                            />
                        </Adjust>

                        <Adjust>
                            <Inputs 
                                seletor={1} 
                                id="nome" 
                                name="nome" 
                                type="email" 
                                placeholder="Nome completo" 
                                onChange={HandleChangeValues}
                            />
                        </Adjust>

                        <Adjust>
                            <Inputs 
                                seletor={2} 
                                id="email" 
                                name="email" 
                                type="email" 
                                placeholder="Seu email" 
                                onChange={HandleChangeValues} 
                            />
                        </Adjust>
                        <Adjust>
                            <Inputs 
                                seletor={3} 
                                id="senha" 
                                name="senha" 
                                type="password" 
                                placeholder="Senha" 
                                onChange={HandleChangeValues}
                            />
                        </Adjust>
                       
                        <Adjust>
                            <Button 
                                type="submit" 
                                onClick={() => new AxiosUser().axiosIns(values, image)} 
                                texto="Cadastrar"
                            />
                        </Adjust>
                        

                        <a href="/">
                            <h3>Voltar para a página Home</h3>
                        </a>

                    </Cadastrar>
                </CadAlign>
            </All>
        </>
    )
}

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
                <CadAlign>
                    <Cadastrar>
                        <h1>Login</h1>
                        
                        <AdjustLogin>
                            <Adjust>
                                <Inputs seletor={2} id="email" name="email" type="email" placeholder="Seu email" onChange={HandleChangeValues} />
                            </Adjust>

                            <Adjust>
                                <Inputs seletor={3} id="senha" name="senha" type="password" placeholder="Senha"  onChange={HandleChangeValues}/>
                            </Adjust>

                            <Adjust>
                                <Button type="button" onClick={() => HandleClickButton()} texto="Enviar"/>
                            </Adjust>
                        </AdjustLogin>
                        
                        <a type="submit" href="#">
                            <h3>Esqueceu a senha?</h3>
                        </a>
                        
                        <h3>Ainda não tem cadastro?</h3> 
                        
                        <a type="submit" href="/Cadastro">
                            <h3>Crie uma conta!</h3>
                        </a>
                    </Cadastrar>
                </CadAlign>
            </All>
        </>
    )
}
