import React from 'react';
import { Footer } from '../Components/footer/Style';
import { App } from '../Components/Navbar/Navbar';
import { Centro, Conteudo, Principal } from './Style';

export function Sobre(){
    return(
        <>
        <Conteudo>
        <App />
            <Centro>
                <Principal>
                <h1>SOBRE NÓS</h1>
                </Principal>
            </Centro>
        <Footer />
        </Conteudo>
        </>
    )
}