import bodega from './images/bodega.jpeg'




const BodegaSection = ({ lenguage }) => {

    if(lenguage === "EN") {
        return (
            <div className='wine-offer' id='wine-cellar'>
                <div className='wine-text'>
                    <h2>Wine Cellar</h2>
                    <p>Discover our wine cellar, featuring selections from small winemakers. Each week we add a new label to our menu.</p>
        
                    <div className='hero-buttons'>
                        <button>
                            <a href="./images/CartaBodega.pdf" download="Wine-Cellar.pdf">View Wine Cellar</a>
                        </button>
                    </div>
        
                </div>
        
                <div className='wine-image'>
                    <figure><img src={bodega} alt="Wine cellar"></img></figure>
                </div>
            </div>
        )
        
    }
    return (
        <div className='wine-offer' id='bodega'>
            <div className='wine-text'>
                <h2>Bodega</h2>
                <p>Descubre nuestra bodega, con referencias de pequeños viticultores. Cada semana añadimos una nueva referencia a la carta. </p>

                <div className='hero-buttons'>
                    <button>
                        <a href="./images/CartaBodega.pdf" download="Bodega.pdf">Ver Bodega</a>
                    </button>
                </div>

            </div>

            <div className='wine-image'>
                <figure><img src={bodega}></img></figure>
            </div>
        </div>
    )
}


export default BodegaSection