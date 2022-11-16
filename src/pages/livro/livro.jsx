import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToken } from "../../services/auth";
import { AxiosUser } from "../../services/axios";
import { All } from "../../Style/all";
import { MyBook } from "../Components/bookContent/bookContent";
import { App } from "../Components/Navbar/Navbar";



export function Livro(){
    
    const params = useParams()
    const [obra, setObra] = useState('')
    const [userImg, setUserImg] = useState('')
    const [coments, setComents] = useState('')

    useEffect(() => {
        new AxiosUser().axiosLiv(params.titulo).then((response)=>{
            console.log(response)
            setObra(response.liv)
            setUserImg(response.userImg)
            setComents(response.coment)
            
        })
 
    },[])

            return(
                <All>
                    <App />
                    <MyBook 
                        obra={obra}
                        userImg={userImg}
                        coments={coments}
                    />
                </All>
            )
        



}