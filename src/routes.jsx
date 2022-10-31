import { Home } from './pages/Home/Home.jsx'
import GlobalStyle from './Style/Global'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Sobre } from './pages/Sobre/Sobre.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Cadastro } from './pages/Cadastro/Cadastro.jsx'
import { UserPage } from './pages/UserPage/UserPage.jsx'
import { Update } from './pages/update/update.jsx'
import { Postar } from './pages/Postar/postar.jsx'


export function Rotas(){

    return(
        
            <BrowserRouter>
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/Sobre" element={<Sobre />}></Route>
                        
                        <Route path="/Login" element={<Login />}></Route>
                        <Route path="/Cadastro" element={<Cadastro />}></Route>


                        <Route path="/Perfil/:nome" element={<UserPage />}></Route>
                        <Route path="/Perfil/Update" element={<Update />}></Route>

                        <Route path="/Post/Create" element={<Postar />}></Route>

                    </Routes>
                
                <GlobalStyle />
            </BrowserRouter>
        
  )
}