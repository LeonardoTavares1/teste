import { useState } from "react"
import { useEffect } from "react"
import { getToken } from "../../../services/auth"
import { AxiosUser } from "../../../services/axios"
import { Button2 } from "../buttons/buttons"
import { Documento } from "../documento/documento"
import { BookAlign, BookContent, Capa, Delimitar, Faixa, FaixaN, FaixaPdf, ImagemPerf, ProfileAutor, Secao, Sinopse, TopContent } from "./style"
import {  pdfjs } from 'react-pdf';
import { Inputs } from "../inputs/inputs"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export function OtherBook(obra){

    const itens = obra.obra
   
    const [imgUser, setImgUser] = useState()

    

    const [sinopseContent, setSinopseContent] = useState(undefined)
    console.log(itens.texto)

    useEffect(() => {
        new AxiosUser().axiosGetImgUser(itens.userID).then((response) => setImgUser(response.data[0].pathImg))

    },[new AxiosUser().axiosGetImgUser(itens.userID).then((response) => setImgUser(response.data[0].pathImg))]) 

    

    const Ler = () =>{
        
    }

    return(
        <BookAlign>
                <BookContent>
                    <FaixaN>
                        <h1>Nome da obra: {itens.titulo}</h1>
                        <h1>Genero: {itens.genNome}</h1>
                        <h1>Publicado em: {itens.insertDate}</h1>
                    </FaixaN>
                    <TopContent>
                        <Capa>
                            <img src={itens.pathImg}></img>
                        </Capa>
                        <ProfileAutor>
                            <a href={`/Perfil/${itens.userName}`}>
                                <h1>Perfil do autor</h1>
                                <ImagemPerf>
                                    <img src={imgUser}></img>
                                </ImagemPerf>
                                <h1>{itens.userName}</h1>
                            </a>
                        </ProfileAutor>
                    </TopContent>

                    
                    <Faixa>
                        <Delimitar>
                            <Button2 texto='Ler' onClick={() => Ler()}></Button2>
                        </Delimitar>
                        
                        <Delimitar>
                            <Button2 texto="Comentar"></Button2>
                        </Delimitar>
                        <Delimitar>
                            <Button2 texto="Curtir" onClick={() => console.log('Vazio')}></Button2>
                        </Delimitar>
                        <Delimitar>
                            <Button2 texto="Favoritar" ></Button2>
                        </Delimitar>
                    </Faixa>

                    {sinopseContent != undefined && <Sinopse id="SinopseCon">
                    <p>{itens.texto}</p>
    </Sinopse>
    }
                    

                </BookContent>
            </BookAlign>
    )
}
//curtir, genNome, imgID, insertDate, livID, pathImg, postID, texto, titulo, userID, userName
export function MyBook(obra){

    const itens = obra.obra

   
    const [imgUser, setImgUser] = useState('')


    useEffect(() => {
        new AxiosUser().axiosGetImgUser(itens.userID).then((response) => setImgUser(response.data[0].pathImg))
    },[])

    return(
        <BookAlign>
                <BookContent>
                    <FaixaN>
                        <h1>Nome da obra: {itens.titulo}</h1>
                        <h1>Genero: {itens.genNome}</h1>
                        <h1>Publicado em: {itens.insertDate}</h1>
                    </FaixaN>
                    <TopContent>
                        <Capa>
                            <img src={itens.pathImg}></img>
                        </Capa>
                        <ProfileAutor>
                            <a href={`/Perfil/${itens.userName}`}>
                                <h1>Perfil do autor</h1>
                                <ImagemPerf>
                                    <img src={imgUser}></img>
                                </ImagemPerf>
                                <h1>{itens.userName}</h1>
                            </a>
                        </ProfileAutor>
                    </TopContent>

                    
                    <Faixa>
                        <Delimitar>
                            <Button2 texto='Ler' ></Button2>
                        </Delimitar>
                        
                        <Delimitar>
                            <Button2 texto="Comentar"></Button2>
                        </Delimitar>
                        <Delimitar>
                            <Button2 texto="Deletar" onClick={() => new AxiosUser().axiosDelPost(itens.postID) }></Button2>
                        </Delimitar>
                        <Delimitar>
                            <Button2 texto="Alterar" ></Button2>
                        </Delimitar>
                    </Faixa>

                    <Sinopse>
                        <p>{itens.texto}</p>
                    </Sinopse>

                    
                    <Secao>
                        <Documento pdf={itens.pathLiv} />
                    </Secao>
                    
                    

                </BookContent>
            </BookAlign>
    )
}