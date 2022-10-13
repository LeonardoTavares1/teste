import React from 'react';
import { Footer, ItemAbout, ItemPara } from './Style';


export function Foter(){
    return(
            <Footer>
                <div>
                    <ItemAbout ><b>&nbsp;&nbsp;Todos os direitos reservados</b></ItemAbout>
                    <br></br>
                    <ItemPara>Política de Privacidade</ItemPara>
                    <br></br>
                </div>
            </Footer>
    )
}