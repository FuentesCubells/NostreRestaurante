import React from 'react';
import nostre from './images/nostre.jpg';
const Hero = ({lenguage}) => {


    if(lenguage === 'EN'){
        return(
                <div className='hero-container'>
                <div className='hero-content'>
                    <div className='hero-text'>
                        <h1>We cook to feel, that's why we cook what we are.</h1>
                        <ul>
                            <li><span>We are Opportunity,</span> the one offered by the season of our products.</li>
                            <li><span>We are Origin,</span> the result of a fusion of influences: the immigration of Aragonese, Andalusian, and Castilian people who arrived in Valencia.</li>
                            <li><span>We are Pride,</span> we share the memory of our ancestors and cook it together with the influence of our finest mentors.</li>
                        </ul>
                    </div>
                    <div className="hero-img">
                        <figure>
                            <img src={nostre} alt="Detail of Nostre Restaurant's apron" />
                        </figure>
                    </div>
                </div>
                <div className='hero-buttons'>
                    <button><a href="#carta">See the Menu</a></button>
                    <button className='reservar'><a href='#reservation'>Reserve</a></button>
                </div>
            </div>
        
        )
    }

    return (
        <div className='hero-container' id='home'>
            <div className='hero-content'>
                <div className='hero-text'>
                    <h1>En nostre honramos el origen. Tenemos un destino. Sin origen no hay destino</h1>
                </div>
                <div className="hero-img">
                    <figure>
                        <img src={nostre} alt="Imagen detalle del delantal de Nostre Restaurante" />
                    </figure>
                </div>
            </div>
            <div className='hero-buttons'>
                <button><a href="#carta">Ver Menú</a></button>
                <button className='reservar'><a href='#reservation'>Reservar</a></button>
            </div>
        </div>
    )
}

export default Hero