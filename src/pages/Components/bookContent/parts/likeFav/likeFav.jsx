import { Button2 } from "../../../buttons/buttons";
import { Delimitar } from "../../style";

export function LikeFav(){
    return(
        <>
            <Delimitar>
                <Button2 texto="Curtir" onClick={() => console.log('Vazio')}></Button2>
            </Delimitar>
            <Delimitar>
                <Button2 texto="Favoritar" ></Button2>
            </Delimitar>
        </>
    )


}