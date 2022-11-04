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

    useEffect(() => {
        new AxiosUser().axiosGetPostFilter(params.titulo).then((response) => setObra(response.data[0]))
    },[])

    console.log(obra)

    if(obra.userID == getToken().userID){
        return(
            <All>
                <App />
                <MyBook 
                    obra={obra}
                />
            </All>
        )
    }

}