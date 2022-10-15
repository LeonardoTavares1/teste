import  Axios  from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToken } from "../../services/auth";
import { All } from "../../Style/all";
import { Foter } from "../Components/footer/Footer";
import { App } from "../Components/Navbar/Navbar";
import { MyProfile, OtherUser } from "../Components/usercontent/userContent";
import { Centro } from "../Sobre/Style";

export function UserPage(){

    /* tá com erro, parei de mecher por aqui */

    const [usuario, setUsuario] = useState()

    const parametros = useParams()

    console.log(usuario)
    
    useEffect(()=>{
        Axios.post(`http://localhost:3001/usuario/getProfile`, {
            nome: parametros.nome
        }).then((response) =>{
            console.log(response.data[0])
            setUsuario(response.data[0])
        })
    },[])

    
    if(usuario.nome === getToken().nome){ 
        return(
            <>
                <All>
                    <App />
                        <Centro>
                            <MyProfile />
                        </Centro>
                    <Foter />
                </All>
            </>
        )
    }else{
        return(
            <>
                <All>
                    <App />
                        <Centro>

                        </Centro>
                    <Foter />
                </All>
            </>
        )
    }
}