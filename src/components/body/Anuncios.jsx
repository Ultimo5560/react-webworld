

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
          <img className="img_anuncios__one" src="../../../public/design-web-work.jpg" />
        </div>
    </>
    
  )
}

export default Anuncios;