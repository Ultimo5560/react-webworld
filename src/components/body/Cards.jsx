


const Cards = () => {


  return (
    <>
        <section className="card" id="precios">
          <div className="card__parr">
            <p className="card__msj">
              Escoje un plan que se ajuste a tus necesidades
            </p>
          </div>
          <div className="card__item">
            <h3 className="card__plan">Básico</h3>
            <h3 className="card__price">$4,299</h3>
            <p className="card__features card__features--margin">Hasta 7 días de soporte técnico</p>
            <section className="card__div--basico">
              <p className="card__features">Adaptable a diferentes dispositivos</p>
              <p className="card__features">Hasta 5 secciones en el mismo sitio web</p>
              <p className="card__features">Hasta 3 Cuentas de correo electronico profesional</p>
              <p className="card__features">Ubicación con Google Maps</p>
              <p className="card__features">Enlaces a redes sociales</p>
              <p className="card__features">Botón para enviar mensajes por WhatSapp o Facebook Messenger</p>
              <p className="card__features">Formulario de contacto</p>
              <p className="card__features">Un año de hosting y dominio gratuito</p>
              <p className="card__features">Certificado de seguridad SSL</p>
            </section>
            
            <a href="https://www.facebook.com/113494897066307" target="blank" className="card__cta">Compralo ahora</a>
          </div>
          <div className="card__item card__item--active">
          <h3 className="card__plan">Empresarial</h3>
            <h3 className="card__price">$15,299</h3>
            <p className="card__features card__features--margin">Hasta 2 meses de soporte técnico</p>
            <section className="card__div--ejecutivo">
              <p className="card__features">Adaptable a diferentes dispositivos</p>
              <p className="card__features">Hasta 10 secciones en el mismo sitio web</p>
              <p className="card__features">Hasta 8 cuentas de correo electrónico profesional</p>
              <p className="card__features">Catalogo de productos o servicios</p>
              <p className="card__features">Metodo de pago con tarjeta de crédito o débito</p>
              <p className="card__features">Boton de Paypal</p>
              <p className="card__features">Ubicación con Google Maps</p>
              <p className="card__features">Enlaces a redes sociales</p>
              <p className="card__features">Botón para enviar mensajes por WhatSapp o Facebook Messenger</p>
              <p className="card__features">Formulario de contacto</p>
              <p className="card__features">Un año de hosting y dominio gratuito</p>
              <p className="card__features">Sitio web 100% administrable</p>
              <p className="card__features">Uno o mas usuarios administradores y no administradores</p>
              <p className="card__features">Registro de usuario con gmail, hotmail y facebook</p>
              <p className="card__features">Chat propio en vivo con los clientes</p>
              <p className="card__features">Certificado de seguridad SSL</p>
            </section>
            <a href="https://www.facebook.com/113494897066307" target="blank" className="card__cta">Compralo ahora</a>
          </div>
          <div className="card__item card__item--profesional">
          <h3 className="card__plan">Profresional</h3>
            <h3 className="card__price">$6,999</h3>
            <p className="card__features card__features--margin">Hasta 1 mes de soporte técnico</p>
            <section className="card__div--profesional">
              <p className="card__features">Adaptable a diferentes dispositivos</p>
              <p className="card__features">Hasta 8 secciones en el mismo sitio web</p>
              <p className="card__features">Metodo de pago con tarjeta de crédito o débito</p>
              <p className="card__features">Hasta 5 cuentas de correo electrónico profesional</p>
              <p className="card__features">Botón para enviar mensajes por WhatSapp o Facebook Messenger</p>
              <p className="card__features">Catalogo de productos o servicios</p>
              <p className="card__features">Boton de Paypal</p>
              <p className="card__features">Ubicación con Google Maps</p>
              <p className="card__features">Enlaces a redes sociales</p>
              <p className="card__features">Formulario de contacto</p>
              <p className="card__features">Un año de hosting y dominio gratuito</p>
              <p className="card__features">Certificado de seguridad SSL</p>
            </section>
            
            <a href="https://www.facebook.com/113494897066307" target="blank" className="card__cta">Compralo ahora</a>
          </div>
          <div className="card__question">
            <p className="card__parr_question">
                ¿No encontraste un plan adecuado para ti?
                Nos ajustamos a tus necesidades y presupuesto
                <a href="https://www.facebook.com/WebWorld-113494897066307" target="blank" className="card__cta--contactanos">Contactanos</a>
            </p>
            
            <picture className="card__img_question">
              <img className="card__question_img" src="../question.svg" alt="" />
            </picture>
          </div>
        </section>
    </>
    
  )
}

export default Cards;
