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
                    <button>See the Menu</button>
                    <button className='reservar'><a href='#reservation'>Reserve</a></button>
                </div>
            </div>
        
        )
    }

    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <div className='hero-text'>
                    <h1>Cocinamos para sentir, por eso cocinamos lo que somos.</h1>
                    <ul>
                        <li><span>Somos Øportunidad,</span> aquella que nos ofrece la temporada de nuestros productos</li>
                        <li><span>Somos Ørigen,</span> el resultado de todo un cruce de influencias: la de la inmigración de aquellos aragoneses, andaluces y manchegos que llegaron hasta Valencia.</li>
                        <li><span>Somos Ørgullo,</span> compartimos la memoria de nuestros antepasados y la cocinamos junto a la influencia de nuestros mejores maestros.</li>
                    </ul>
                </div>
                <div className="hero-img">
                    <figure>
                        <img src={nostre} alt="Imagen detalle del delantal de Nostre Restaurante" />
                    </figure>
                </div>
            </div>
            <div className='hero-buttons'>
                <button>Ver La Carta</button>
                <button className='reservar'><a href='#reservation'>Reservar</a></button>
            </div>
        </div>
    )
}

export default Hero