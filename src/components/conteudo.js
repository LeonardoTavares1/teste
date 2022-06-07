import React from 'react';
import liber from '../views/img/liber.jpeg';
import nite from '../views/img/nite.jpg';
import dori from '../views/img/dori.jpg';
import kapital from '../views/img/kapital.jpg';
import cansei from '../views/img/cansei.jpg';
import anarquia from '../views/img/anarquia.jpg';
import moderno from '../views/img/moderno.jpg';
import repub from '../views/img/repub.jpg';

const Conteudo = () => {
    return ( <>
    <div className='centro'>

        <div className='conteudo'>

            <div className='slider'>
          
                    <img src={liber} width='100%' height='100%' /> 
            
            </div>
            
            <div className='faixa'>
                Populares
            </div>

            <div className='capas'>

                <div className='livroprin'>
                    <img src={nite} width='70%' height='80%' />
                    <div className='textliv'>Além do bem e do mal</div>
                </div>
                <div className='livrosec'>
                    <img src={cansei} width='50%' height='40%' />
                    <div className='textliv'>Além do bem e do mal</div>
                    <img src={kapital} width='50%' height='40%' />
                    <div className='textliv'>Além do bem e do mal</div>
                </div>

                <div className='livrosec'>
                    <img src={dori} width='50%' height='40%' />
                    <div className='textliv'>Além do bem e do mal</div>
                    <img src={anarquia} width='50%' height='40%' />
                    <div className='textliv'>Além do bem e do mal</div>
                </div>

                <div className='livrosec'>
                    <img src={moderno} width='50%' height='40%' />
                    <div className='textliv'>Além do bem e do mal</div>
                    <img src={repub} width='50%' height='40%' />
                    <div className='textliv'>Além do bem e do mal</div>
                </div>

            </div>
        </div>

    </div>


    </>);
}
 
export default Conteudo;