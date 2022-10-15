import React from 'react';
import { All } from '../../Style/all';
import { Foter } from '../Components/footer/Footer';
import { App } from '../Components/Navbar/Navbar';
import { Centro, Principal } from './Style';

export function Sobre(){
    return(
        <All>
        <App />
            <Centro>
                <Principal>
                <h1>SOBRE NÓS</h1>
                </Principal>
            </Centro>
        <Foter />
        </All>
    )
}