import { getToken, Token } from "../../../services/auth"
import { All } from "../../../Style/all"
import { Button, Button2 } from "../buttons/buttons"
import { Botao } from "../buttons/style"
import { Foter } from "../footer/Footer"
import { App } from "../Navbar/Navbar"
import { ProfileAlign, Nome, IMGProfile, Info, Obras, Profile, UserContent, Inf } from "./style"
import Axios from 'axios'
import { AxiosUser } from "../../../services/axios"

export function OtherUser(user){
    const usuario = user.user
    

    return(
        
        <UserContent>
            <All>
                <Profile>
                    
                    <ProfileAlign>
                        <IMGProfile>
                            <h1>Em teoria aqui vai uma imagem.</h1>
                        </IMGProfile>

                        <Nome>{usuario.nome}</Nome>
                   </ProfileAlign>
                </Profile>

                <Info>
                    <h1>Conta criada em {usuario.insertDate}</h1>
                </Info>

            
                <Obras>
                        <h1>aaaaaaaaaa</h1>
                </Obras>
                
            </All>
        </UserContent>
    )
}

export function MyProfile(){
    console.log(getToken())
    
    const buttonDel = () =>{

        Axios.delete(`http://localhost:3001/usuario/delete/${getToken().userID}`).then(()=>{
            localStorage.removeItem(Token)    
            window.location.replace('/', {replace: true})
        })
       
    }

    const update = () =>{
        window.location.replace('Perfil/../Update')
    }

 

    return(
        <UserContent>
            <All>
                <Profile>
                    
                    <ProfileAlign>
                        <IMGProfile>
                            <h1>Em teoria aqui vai uma imagem.</h1>
                        </IMGProfile>

                        <Nome>{getToken().nome}</Nome>
                   </ProfileAlign>
                </Profile>

                <Info>
                    <h1>Conta criada em {getToken().insertDate}</h1>

                    
                        
                        <Button2 type='button' onClick={() => new AxiosUser().axiosDel()} texto="Deletar" ></Button2>  
                        <Button2 type='button' onClick={() => update()} texto="Update" ></Button2>
                       
                   
                </Info>

                    <Obras>
                        <h1>aaaaaaaaaa</h1>
                    </Obras>
                
            </All>
        </UserContent>
    )
}