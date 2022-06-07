import React from 'react';
import lupa from '../views/img/lupa.png';
import perfil from '../views/img/perfil.png'


const Nav = () => {
    return ( <>
        <div className='nav'>
        <div className='logo'>Liber</div>

        <div className='navesq'>
            <div className='img' >
                <img src={lupa} width='20' height="20" />
            </div>
            Inicio
            Publicar
            Gêneros  
            <img src={perfil} width='60' height='40' />
            <div>&#9662;</div> 
        </div>
        </div>
    </> );
}
 
export default Nav;