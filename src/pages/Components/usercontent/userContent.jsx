import { getToken, Token } from "../../../services/auth"
import { All } from "../../../Style/all"
import { Button2 } from "../buttons/buttons"
import { ProfileAlign, Nome, IMGProfile, Info, Obras, Profile, UserContent, Inf } from "./style"
import { AxiosUser } from "../../../services/axios"
import { Data } from "../../../services/utils"

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

    console.log(Data())

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