

export const Anuncios = () => {

  const onLoad = () => {
    // const img = document.querySelector('.img_anuncios__one');
    // const divmg = document.querySelector('.container__anuncios')
    // const numImg = divmg.clientWidth
    
    // img.style.transform = "translateX(200px)";
    // img.style.transition = "transform 2s";
    // img.style.animation = "ease-in-ease";
  }

  return (
    <>
        <div className="container__anuncios" onLoad={onLoad}>
          <img className="img_anuncios__one" src={`../design-web-work.jpg`} />
          <div className="container__anuncios_parr">
            <h1 className="anuncios__h1">Modernizate</h1>
            <p className="anuncios__parr">Haz conocer tu empresa al mundo</p>
          </div>
        </div>
    </>
    
  )
}