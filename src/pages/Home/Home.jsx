import React from 'react';
import { All } from '../../Style/all.jsx';
import { AppContext } from '../../variaveis/Context.jsx';
import { Foter } from '../Components/footer/Footer.jsx';
import { App } from '../Components/Navbar/Navbar.jsx';
import { Centro, Conteudo, Principal } from './Style.jsx';

export function Home(){
    return(

            <Conteudo >
                <App />
                <Centro>
                    
                    <Principal>
                        <h1>É foda</h1>
                    </Principal>
                    
                </Centro>
                <Foter />
           </Conteudo>
    )
}