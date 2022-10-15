import { getToken } from "../../../services/auth"
import { UserContent } from "./style"

export function OtherUser(name, nomePlum, insDate, fkImg, statUser, userID){
    return(
        <UserContent>
            <h1>{name}</h1>
        </UserContent>
    )
}

export function MyProfile(){
    return(
        <UserContent>
            <h1>{getToken().nome}</h1>
        </UserContent>
    )
}