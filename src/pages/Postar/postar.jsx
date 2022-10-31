import { useState } from "react";
import { All } from "../../Style/all";
import { Cadastrar } from "../Cadastro/style";
import { Button, Button2 } from "../Components/buttons/buttons";
import { DropFile, Inputs } from "../Components/inputs/inputs";
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export function Postar(){

    const [image, setImage] = useState({file: null})
    const[gpdf, setPdf] = useState({file: null})
    const[text, setText] = useState()

    const [numPages, setNumPages] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    


    const Novo = () =>{
        console.log(image)
    }

    const GetImg = (value) =>{
        setImage({file: URL.createObjectURL(value.target.files[0])}) 
    }

    const GetPdf = (value) =>{
        setPdf({file: URL.createObjectURL(value.target.files[0])}) 
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
            <img src={image.file}></img>
            <Button2 type="button" onClick={() => Novo()}>Teste</Button2>
            
            </Cadastrar>
            <Document
                file={gpdf.file}
                onLoadSuccess={onDocumentLoadSuccess}
                >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </All>
    )
}