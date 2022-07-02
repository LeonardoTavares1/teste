import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Generos } from './pages/generos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/conteudo' element={<Generos/>}></Route>
    </Routes>
  </BrowserRouter>
)
