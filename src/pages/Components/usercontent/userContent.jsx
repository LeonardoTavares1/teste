import { getToken, Logout, Token } from "../../../services/auth"
import { All } from "../../../Style/all"
import { Button2 } from "../buttons/buttons"
import { ProfileAlign, Nome, IMGProfile, Info, Obras, Profile, Inf, UserSobreContent, ContentUser} from "./style"
import { AxiosUser } from "../../../services/axios"
import { Data } from "../../../services/utils"
import { BookAlign, Capa, Delimitar } from "../bookContent/style"
import { SobreContent } from "../../Sobre/Style"
import { Books, Content } from "../../Home/Style"

export function OtherUser({user, liv}){
    const imgU = user.pathImg

    const update = () =>{
        window.location.replace('Perfil/../Update')
    }

    return(
        <BookAlign>
            <UserSobreContent>
                <Profile>
                    
                    <ProfileAlign>
                        
                        <img src={imgU}></img>
                     

                        <Nome>{getToken().nome}</Nome>
                   </ProfileAlign>
                </Profile>

                <Info>
                        <Delimitar>
                            <h1>Conta criada em: {getToken().insertDate}</h1>
                        </Delimitar>           
                </Info>

                    <ContentUser>
                        {typeof liv !== 'undefined' && liv.map((value)=>{
                                    return(
                                        <Books key={value.postID}>
                                            <a href={`/Livro/${value.titulo}`}>
                                                <Capa src={value.pathImg}/>
                                                <h3>{value.titulo}</h3>
                                            </a>
                                        </Books>
                                        )}
                                )}
                    </ContentUser>
                
            </UserSobreContent>
        </BookAlign>
    )
}

export function MyProfile({user, liv}){

    const imgU = user.pathImg

    const update = () =>{
        window.location.replace('Perfil/../Update')
    }

    return(
        <BookAlign>
            <UserSobreContent>
                <Profile>
                    
                    <ProfileAlign>
                        
                        <img src={imgU}></img>
                     

                        <Nome>{getToken().nome}</Nome>
                   </ProfileAlign>
                </Profile>

                <Info>
                        <Delimitar>
                            <h1>Conta criada em: {getToken().insertDate}</h1>
                        </Delimitar>

                        

                    
                        <Delimitar>
                            <Button2 type='button' onClick={() => new AxiosUser().axiosDel()} texto="Deletar" ></Button2>  
                        </Delimitar>

                        <Delimitar>
                            <Button2 type='button' onClick={() => update()} texto="Update" ></Button2>
                        </Delimitar>
                        <Delimitar>
                            <Button2 type='button' onClick={() => Logout()} texto="Logout" ></Button2>
                        </Delimitar>
                        
                       
                   
                </Info>

                    <ContentUser>
                        {typeof liv !== 'undefined' && liv.map((value)=>{
                                    return(
                                        <Books key={value.postID}>
                                            <a href={`/Livro/${value.titulo}`}>
                                                <Capa src={value.pathImg}/>
                                                <h3>{value.titulo}</h3>
                                            </a>
                                        </Books>
                                        )}
                                )}
                    </ContentUser>
                
            </UserSobreContent>
        </BookAlign>
    )
}