import { useState } from "react"
import { useEffect } from "react"
import { AxiosCrud, AxiosUser } from "../../../services/axios"
import { BookAlign, BookContent, Capa, FaixaN, ImagemPerf, ProfileAutor, TopContent } from "./style"
import {  pdfjs } from 'react-pdf';
import { ContentPart } from "./parts/contentPart/contentPart"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export function OtherBook(obra){

    const itens = obra.obra
   
    const [imgUser, setImgUser] = useState()
    console.log(imgUser)
    useEffect(() => {
        AxiosCrud.Get('/usuario/getImg', {userID: itens.userID}).then((response)=> setComent(response.data[0].pathImg))

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

                    <ContentPart  texto={itens.texto} book={itens.pathLiv} postID={itens.postID} />

                </BookContent>
            </BookAlign>
    )
}
//curtir, genNome, imgID, insertDate, livID, pathImg, postID, texto, titulo, userID, userName
export function MyBook(obra){

    const itens = obra.obra

    
    const [imgUser, setImgUser] = useState('')
    console.log(imgUser)
    
    useEffect(() => {
        AxiosCrud.Get('/usuario/getImg', {userID: itens.userID}).then((response)=> setImgUser(response.data[0].pathImg))
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

                    <ContentPart texto={itens.texto} book={itens.pathLiv} postID={itens.postID} />
                    
                    

                </BookContent>
            </BookAlign>
    )
}