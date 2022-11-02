import { useState } from "react";
import { All } from "../../Style/all";
import { Cadastrar } from "../Cadastro/style";
import { Button2 } from "../Components/buttons/buttons";
import { DropFile, Inputs } from "../Components/inputs/inputs";
import Axios from 'axios'
import { useEffect } from "react";
import { AxiosUser } from "../../services/axios";


export function Postar(){

    const [image, setImage] = useState(null)
    const[pdf, setPdf] = useState(null)
    const[gens, setGens] = useState()
    const[text, setText] = useState()
    const[gen, setGen] = useState(null)
    
    useEffect(() => {
        Axios.get('http://localhost:3001/gen/get').then((response)=>{
            setGens(response.data)
        })
    },[])
 
    const HandleChangeValues = (value) =>{
        setText(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };

    const Novo = () =>{
            
            const config = {
              headers: {
                'content-type': 'multipart/form-data',
              },
            };

            const EusouumPalio = new AxiosUser().axiosCreatePost(image, pdf, config.headers, text, gen)
            
           
          
    }
    
    const genMud = (value) => {
        setGen(value.target.value)
        
    }

    const GetImg = (value) =>{
        setImage(value.target.files[0]) 
    }

    const GetPdf = (value) =>{
        setPdf(value.target.files[0]) 
    }

    return(
        <All>
            <Cadastrar>
            <Inputs 
                seletor ='' 
                id='Nome' 
                name='nome' 
                type="text" 
                placeholder="Qual o nome de sua obra?" 
                onChange={HandleChangeValues}
            />

            <DropFile 
                id='imgPost' 
                name='imgPost' 
                type="file"
                accept='image/*' 
                onChange={GetImg} 
                texto="Envie a imagem da capa"
            />

            <Inputs 
                seletor ='' 
                id='desc' 
                name='desc' 
                type="text" 
                placeholder="Qual a sinopse da sua obra?" 
                onChange={HandleChangeValues}
            />

            <DropFile 
                id='pdfPost' 
                name='pdfPost' 
                type="file"
                accept='application/pdf'  
                onChange={GetPdf}
                texto="Envie o arquivo PDF de sua obra"
            />
            <select onChange={genMud}>
                {typeof gens !== "undefined" && gens.map((value)=>{
                    
                  
                    return(
                        
                        <option value={value.genID}>{value.nome}</option>
                    )
                })}
            </select>
            
            <Button2 type="button" texto="Enviar" onClick={() => Novo()}></Button2>
            
            </Cadastrar>
        </All>
    )
}