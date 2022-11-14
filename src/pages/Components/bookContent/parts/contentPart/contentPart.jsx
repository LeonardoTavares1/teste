import { useEffect } from "react"
import { useState } from "react"
import { getToken } from "../../../../../services/auth"
import { AxiosCrud, AxiosUser } from "../../../../../services/axios"
import { Button2 } from "../../../buttons/buttons"
import { Documento } from "../../../documento/documento"
import { Inputs } from "../../../inputs/inputs"
import { Coment, ComentAlign, ComentProfile, ComentSection, ComentText, Delimitar, Faixa, NameComent, Secao, Sinopse } from "../../style"
import { LikeFav } from "../likeFav/likeFav"

export function ContentPart({ texto, book, postID}){


    const [select, setSeletor] = useState(0)
    const [ textCom, setTextCom ] = useState()
    const [change, setChange] = useState(0)

    const [coment, setComent] = useState()

    const HandleChangeValues = (value) =>{
        setTextCom(prevValue =>({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    };  

    useEffect(()=>{
        AxiosCrud.Get('/coment/get').then((response)=> setComent(response.data))
        
    },[change])

    if(select == 0){
        return (
            <>
                <Faixa>
                    <Delimitar>
                        <Button2 texto='Ler' onClick={() => setSeletor(1)}></Button2>
                    </Delimitar>
                        
                    <Delimitar>
                        <Button2 texto="Comentar" onClick={() => setSeletor(2)}></Button2>
                    </Delimitar>
                    <LikeFav />
                </Faixa>
                <Sinopse>
                    <p>{texto}</p>
                </Sinopse>
            </>
        )
    }else if(select == 1){
        return( 
            <>
                <Faixa>
                    <Delimitar>
                        <Button2 texto='Sinopse' onClick={() => setSeletor(0)}></Button2>
                    </Delimitar>
                        
                    <Delimitar>
                        <Button2 texto="Comentar" onClick={() => setSeletor(2)}></Button2>
                    </Delimitar>
                    <LikeFav />
                </Faixa>
                <Secao>
                    <Documento pdf={book} />
                </Secao>
            </>
        )
    }else if(select == 2){
        return( 
            <>
                <Faixa>
                    <Delimitar>
                        <Button2 texto='Sinopse' onClick={() => setSeletor(0)}></Button2>
                    </Delimitar>
                        
                    <Delimitar>
                        <Button2 texto="Ler" onClick={()=> setSeletor(1)}></Button2>
                    </Delimitar>
                    <LikeFav />
                </Faixa>
                <Faixa>
                <Inputs 
                    id="coment" 
                    name="textCom" 
                    type="text" 
                    placeholder="Teste" 
                    onChange={HandleChangeValues}
                />
                <Delimitar>
                    <Button2 texto="Enviar" onClick={() =>{ 
                        AxiosUser.axiosCreateCom({textCom: textCom.textCom, fkUser: getToken().userID, fkPost: postID}).then(()=>{
                            setChange(change + 1)
                        })
                    }} ></Button2>
                </Delimitar>
                </Faixa>

                {typeof coment !== undefined && coment.map((value)=>{
                    return(
                        <ComentSection key={value.comID}>
                            <Coment>
                                    <NameComent>{value.nome}</NameComent>
                                    
                                <ComentAlign>
                                    <a src={`/Perfil/${value.nome}`}>
                                        <ComentProfile src={value.pathImg}/>
                                    </a>
                                    <ComentText>{value.textCom}</ComentText>
                                </ComentAlign>
                            </Coment>
                        </ComentSection>
                    )
                })
                }
                


            </>
        )
    }
}