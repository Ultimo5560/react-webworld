

export const Portafolio = () => {
  return (
    <>
        <div id="portafolio" className="portafolio">
          <h2 className="portafolio__h2">Algunas de las marcas que confian en nosotros</h2>
          <img className="portafolio__img_svg" src={`../presentation-client.svg`} alt="" />

          <div className="portafolio__marcas">
            <a href="https://exonica.com.mx/" target="blank">
              <img src={`../exologow.jpg`} alt="" className="portafolio__marcas__img" />
            </a>
            
            <img src="" alt="" className="portafolio__marcas__img" />
            <img src="" alt="" className="portafolio__marcas__img" />

          </div>
        </div>
        
    </>
  )
}