import { Icones } from "../icones/icones"
import { Input, InputDiv } from "./style"

export function Inputs({seletor, id, name, type, placeholder, onChange}){

    return(
            <InputDiv>
                <Icones seletor={seletor} />
                <Input 
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </InputDiv>
        )
}