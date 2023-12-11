import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { MessageForm } from './form/MessageForm';
import {useMsjForm} from './../../../hooks/useMsjForm';

export const Form = () => {
  
  const {msjForm, statusMsj, msjError, msjInputError, msjSend, msjReset} = useMsjForm();

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMsj, setInputMsj] = useState('');

  const onInputName = ({target}) => {
    setInputName(target.value)
    const [form] = document.getElementsByName('nombre');
    target.className.includes('input--off') && form.classList.remove('input--off'); //Remueve el className del input
  }

  const onInputEmail = ({target}) => {
    setInputEmail(target.value)
    const [form] = document.getElementsByName('email');
    target.className.includes('input--off') && form.classList.remove('input--off'); //Remueve el className del input
  }

  const onInputMsj = ({target}) => {
    setInputMsj(target.value)
    const [form] = document.getElementsByName('mensaje');
    target.className.includes('input--off') && form.classList.remove('input--off'); //Remueve el className del input
  }

  const enviarEmail = (e) => {

    console.log({e});

    const [buttonSend] = document.getElementsByClassName('contact__cta');

    e.preventDefault();

    if (inputName.trim().length === 0) {
      const [form] = document.getElementsByName('nombre');
      form.classList.add('input--off');
      msjInputError('nombre');
      setTimeout(() => {
        msjReset();
      }, 6000);
      return;
    }
    if (inputEmail.trim().length === 0) {
      const [form] = document.getElementsByName('email');
      form.classList.add('input--off');
      msjInputError('email');
      setTimeout(() => {
        msjReset();
      }, 6000);
      return;
    }
    if (inputMsj.trim().length === 0) {
      const [form] = document.getElementsByName('mensaje');
      form.classList.add('input--off');
      msjInputError('mensaje');
      setTimeout(() => {
        msjReset();
      }, 6000);
      return;
    }
    buttonSend.classList.toggle('button--disabled');
    buttonSend.replaceChildren('Enviando...')
    emailjs.sendForm('service_qm31ehm','template_jcyw14m',e.target,'vGHLTo1P69jfVHqMq').then(res=>{
      msjSend(res.status);
      setInputName('');
      setInputEmail('');
      setInputMsj('');
      buttonSend.replaceChildren('Mensaje enviado');
      setTimeout(() => {
        msjReset();
        buttonSend.replaceChildren('Enviar ahora');
        buttonSend.classList.toggle('button--disabled');
      }, 6000);
    }, (error) => {
      msjError(error.status);
      setTimeout(() => {
        msjReset();
      }, 6000);
    });

  }
  
  return (
    <>
        <section className="contact" id='contact'>
            <figure className="contact__picture">
                <img src={`../illustration.svg`} className="contact__img" />
            </figure>
            {
              msjForm && <MessageForm props={[msjForm, statusMsj]} />
            }
            <form className="contact__form" onSubmit={enviarEmail}>
                <h2 className="contact__title">Mandanos un Mensaje</h2>
                <input 
                  onChange={onInputName} 
                  value={inputName} 
                  type="text" 
                  placeholder="Ingresa tu nombre:" 
                  className="contact__input" 
                  id="nombre" 
                  name="nombre" 
                />
                <input
                  onChange={onInputEmail} 
                  value={inputEmail} 
                  type="email" 
                  placeholder="Ingresa tu email:" 
                  className="contact__input" 
                  id="email" 
                  name="email" />
                <textarea 
                  onChange={onInputMsj} 
                  value={inputMsj} 
                  placeholder="Mensaje:" 
                  className="contact__input contact__input--area" 
                  id="mensaje" 
                  name="mensaje">
                </textarea>
                <button
                  type="submit" 
                  className="contact__cta">
                    Enviar ahora
                    {/* {(buttonSend.className.includes('button--disabled')) ? 'Enviando...' : 'Enviar ahora'} */}
                </button>
            </form>
        </section>

        <MessengerCustomerChat
          pageId="113494897066307"
          appId="1199634740642864"
        />

    </>
  )
}