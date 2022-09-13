import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Form = () => {

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMsj, setInputMsj] = useState('');
  const onInputName = ({target}) => {
    setInputName(target.value)
  }

  const onInputEmail = ({target}) => {
    setInputEmail(target.value)
  }

  const onInputMsj = ({target}) => {
    setInputMsj(target.value)
  }

  const enviarEmail = (e) => {

    if (inputName.trim().length <= 1) return;
    if (inputEmail.trim().length <= 1) return;
    if (inputMsj.trim().length <= 1) return;

    e.preventDefault();

    emailjs.sendForm('service_qm31ehm','template_jcyw14m',e.target,'vGHLTo1P69jfVHqMq').then(res=>{
      console.log(res);
      setInputName('');
      setInputEmail('');
      setInputMsj('');
    })
    

  }

  return (
    <>
        <section className="contact" id='contact'>
            <figure className="contact__picture">
                <img src="../../public/illustration.svg" className="contact__img" />
            </figure>

            <form className="contact__form" onSubmit={enviarEmail}>
                <h2 className="contact__title">Mandanos un Mensaje</h2>
                <input onChange={onInputName} value={inputName} type="text" placeholder="Ingresa tu nombre:" className="contact__input" id="nombre" name="nombre" />
                <input onChange={onInputEmail} value={inputEmail} type="email" placeholder="Ingresa tu email:" className="contact__input" id="email" name="email" />
                <textarea onChange={onInputMsj} value={inputMsj} placeholder="Mensaje:" className="contact__input contact__input--area" id="mensaje" name="mensaje"></textarea>
                <button type="submit" className="contact__cta">Enviar ahora</button>
            </form>
        </section>

        <MessengerCustomerChat
          pageId="<PAGE_ID>"
          appId="<APP_ID>"
          htmlRef="<REF_STRING>"
        />

    </>
  )
}


export default Form;
