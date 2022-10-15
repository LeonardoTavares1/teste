import { Home } from './pages/Home/Home.jsx'
import GlobalStyle from './Style/Global'
import { BrowserRouter, generatePath, Route, Routes } from 'react-router-dom'
import { Sobre } from './pages/Sobre/Sobre.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Cadastro } from './pages/Cadastro/Cadastro.jsx'
import { UserPage } from './pages/UserPage/UserPage.jsx'
import { useEffect, useState } from 'react'
import { AxiosUser } from './services/axios.jsx'


export function Rotas(){

    return(
        
            <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/Sobre" element={<Sobre />}></Route>
                        <Route path="/Login" element={<Login />}></Route>
                        <Route path="/Cadastro" element={<Cadastro />}></Route>
                        <Route path="/Perfil/:nome" element={<UserPage />}></Route>

                    </Routes>
                
                <GlobalStyle />
            </BrowserRouter>
        
  )
}