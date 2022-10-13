import { Botao } from "./style";

export function Button({type, onClick, texto}){
    
    return(
        <Botao 
            type={type}
            onClick={onClick}
            >
            {texto}
        </Botao>
    )
    
}