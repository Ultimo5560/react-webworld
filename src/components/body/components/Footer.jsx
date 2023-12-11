

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <img className="nav__img" src={'../logoai.png'} alt="" />
      </div>
      <div className="footer-column">
        <h3>Información de contacto:</h3>
        <p>Celular: 633-109-3133</p>
        <p>Correo: ee190995@gmail.com</p>
      </div>
      <div className="footer-column">
        <h3>Redes sociales:</h3>
        <p>
          <a href="https://www.facebook.com/WebWorld-113494897066307" className="footer-links" target="blank">WhatsApp</a>
        </p>
        <p>
          <a href="https://www.facebook.com/WebWorld-113494897066307" className="footer-links" target="blank">Facebook</a>
        </p>
      </div>
    </footer>
  );
};