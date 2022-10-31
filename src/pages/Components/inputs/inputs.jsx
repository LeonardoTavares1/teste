import { Texto } from "../../../Style/all"
import { Icones } from "../icones/icones"
import { Input, InputDiv, InputLabel } from "./style"

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

export function DropFile({ id, name, type, accept, texto, onChange}){

    return(
        <>
            <InputLabel htmlFor={name}>
                <Texto>{texto}</Texto>
            </InputLabel>
                <Input 
                    id={id}
                    name={name}
                    type={type}
                    accept={accept}
                    onChange={onChange}
                /> 
        </>
        )
}