import { useState } from "react";
import { All } from "../../Style/all";
import { Cadastrar } from "../Cadastro/style";
import { Button, Button2 } from "../Components/buttons/buttons";
import { DropFile, Inputs } from "../Components/inputs/inputs";
import { Document, Page, pdfjs } from 'react-pdf';
import Axios from 'axios'
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

//https://www.filestack.com/fileschool/react/react-file-upload/

export function Postar(){

    const [image, setImage] = useState({file: null})
    const[gpdf, setPdf] = useState("https://libert.s3.amazonaws.com/2b21cff1d901664280dda1b5c8e49ac1")
    const[gens, setGens] = useState()
    const[text, setText] = useState()
    const[gen, setGen] = useState(null)

    const [numPages, setNumPages] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    
    useEffect(() => {
        Axios.get('http://localhost:3001/gen/get').then((response)=>{
            setGens(response.data)
        })
    },[])
 
    console.log(gens)

    const Novo = () =>{
            const url = 'http://localhost:3001/awsTeste';
            const formData = new FormData();
            formData.append('file',gpdf);
            formData.append('name', gpdf.name);
            console.log(formData)
            const config = {
              headers: {
                'content-type': 'multipart/form-data',
              },
            };
            Axios.post(url, formData, config.headers).then((response) => {
                let { data } = response
              setImage2(URL.createObjectURL(data))
            });
        
          
    }
    
    const genMud = (value) => {
        setGen(value.target.value)
        
    }
    console.log(gen)
    const GetImg = (value) =>{
        setImage(value.target.files[0]) 
    }

    const GetPdf = (value) =>{
        setPdf(value.target.files[0]) 
    }

    const Nada = () =>{
        console.log('nada')
    }

    return(
        <All>
            <Cadastrar>
            <Inputs 
                seletor ='' 
                id='NomePost' 
                name='nomePost' 
                type="text" 
                placeholder="Qual o nome de sua obra?" 
                onChange={Nada()}
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
                id='NomePost' 
                name='nomePost' 
                type="text" 
                placeholder="Qual a sinopse da sua obra?" 
                onChange={Nada()}
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
            <Document
                file={''}
                onLoadSuccess={onDocumentLoadSuccess}
                >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
            <img src={''}></img>
        </All>
    )
}