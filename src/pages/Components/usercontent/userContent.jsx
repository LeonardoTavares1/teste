import { getToken } from "../../../services/auth"
import { All } from "../../../Style/all"
import { Foter } from "../footer/Footer"
import { App } from "../Navbar/Navbar"
import { ProfileAlign, Nome, IMGProfile, Info, Obras, Profile, UserContent } from "./style"

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
                </Info>

                    <Obras>
                        <h1>aaaaaaaaaa</h1>
                    </Obras>
                
            </All>
        </UserContent>
    )
}