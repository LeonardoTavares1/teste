import { All } from "../../Style/all";
import { Button2 } from "../Components/buttons/buttons";
import { App } from "../Components/Navbar/Navbar";
import { BookAlign, BookContent, Faixa, Sinopse, TopContent } from "./style";


export function Livro(){
    return(
        <All>
            <App />
            <BookAlign>
                <BookContent>
                    <TopContent>

                    </TopContent>
                    <Faixa>
                    
                        <h1>Genero: Romance</h1>
                        <h1>Publicado em: Data</h1>
                        <Button2 texto='Ler'></Button2>

                    </Faixa>
                    <Sinopse>
                        <p>Texto</p>
                    </Sinopse>
                </BookContent>
            </BookAlign>
        </All>
    )


}