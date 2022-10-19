import  Axios  from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToken, testAxios } from "../../services/auth";
import { All } from "../../Style/all";
import { Foter } from "../Components/footer/Footer";
import { App } from "../Components/Navbar/Navbar";
import { MyProfile, OtherUser } from "../Components/usercontent/userContent";
import { Centro } from "../Sobre/Style";

export function UserPage(){

    /* tá com erro, parei de mecher por aqui */
    
    

    //const [params, setParams] = useState(() => useParams())
    const params = useParams() 
    const [user, setUser] = useState('')

    useEffect(() => {
        Axios.post(`http://localhost:3001/usuario/getProfile`, {
            nome: params.nome
        }).then((response) => {
            setUser(response.data[0])
        })
    },[])
    
    
    
    if(user !== undefined){ 
        if(user.nome == getToken().nome){ 
            return(
                        <All>
                            <App />
                                <MyProfile /> 
                            <Foter />
                        </All>
            )
        }else{
            return(    
                    <All>
                        <App />
    
                        <All>
                            <OtherUser user={user}/>
                        </All>
    
                        <Foter />
                    </All>
    
            )
        }
    }else{
        return(    
                <All>
          

                    <All>
                        <h1>Usuario inexistente</h1>
                    </All>

                </All>

        )
    }
}