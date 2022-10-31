import React from 'react';
import { getToken, Token } from '../../services/auth.jsx';
import { AxiosUser } from '../../services/axios.jsx';
import { All } from '../../Style/all.jsx';
import { Foter } from '../Components/footer/Footer.jsx';
import { App } from '../Components/Navbar/Navbar.jsx';
import { Centro } from '../Sobre/Style.jsx';
import { Principal } from './Style.jsx';

export function Home(){
    
    /*let recup = localStorage.getItem('token')
    
    const user = JSON.parse(recup)*/
    console.log(getToken())

    const ApagaMeme = () =>{
        localStorage.removeItem(Token)
        window.location.reload(false)

    }

    const TestaMeme = () =>{
        new AxiosUser().MemesTest()
    }
    
    return(

            <All >
                <App />
        
                    
                    <Principal>
                        <button onClick={() => ApagaMeme()}>ApagaMeme</button>
                        <button onClick={() => TestaMeme()}>TestaMeme</button>
                        <All>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        <h1>Teste</h1>
                        </All>
                    </Principal>
                    
                
                <Foter />
           </All >
    )
}