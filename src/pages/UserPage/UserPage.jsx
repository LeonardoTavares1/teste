import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getToken } from "../../services/auth";
import { AxiosUser } from "../../services/axios";
import { All } from "../../Style/all";
import { Foter } from "../Components/footer/Footer";
import { App } from "../Components/Navbar/Navbar";
import { MyProfile, OtherUser } from "../Components/usercontent/userContent";

export function UserPage(){


    const params = useParams() 
    const [user, setUser] = useState('')

    useEffect(() => {
        new AxiosUser().axiosGet(params.nome).then((response) => setUser(response.data[0]))
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
          
                    <App />
                    <All>
                        <h1>Usuario inexistente</h1>
                    </All>

                </All>

        )
    }
}