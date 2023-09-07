import React from 'react';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <h1>Cocinamos para sentir, por eso cocinamos lo que somos.</h1>
                <ul>
                    <li><span>Somos Øportunidad,</span> aquella que nos ofrece la temporada de nuestros productos</li>
                    <li><span>Somos Ørigen,</span> el resultado de todo un cruce de influencias: la de la inmigración de aquellos aragoneses, andaluces y manchegos que llegaron hasta Valencia.</li>
                    <li><span>Somos Ørgullo,</span> compartimos la memoria de nuestros antepasados y la cocinamos junto a la influencia de nuestros mejores maestros.</li>
                </ul>
            </div>
            <div className='hero-buttons'>
                <button>Ver La Carta</button>
                <button className='reservar'>Reservar</button>
            </div>
        </div>
    )
}

export default Hero