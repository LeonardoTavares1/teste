import React from 'react'
import Conteudo from '../components/conteudo';
import Nav from '../components/nav'

const Home = () => {
    return ( <>
    <div className='home'>
        <Nav />
        <Conteudo />
    </div>
    </> );
}
 
export default Home;