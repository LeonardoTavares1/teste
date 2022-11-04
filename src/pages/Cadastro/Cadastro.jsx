import { useState } from 'react'
import { All } from '../../Style/all';
import { Button } from '../Components/buttons/buttons';
import { DropFile, Inputs } from '../Components/inputs/inputs';
import { Adjust, AdjustImg, CadAlign, Cadastrar } from './style';
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
                                texto='Escolha sua imagem de Perfil aqui' 
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