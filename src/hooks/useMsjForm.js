import { useState } from 'react';
import { MessageForm } from '../components/body/components/form/MessageForm';


export const useMsjForm = (initialMsj = '', valueStatus = 0) => {

    const [msjForm, setMsjForm] = useState(initialMsj);
    const [statusMsj, setStatusMsj] = useState(valueStatus);

    const msjError = (error) => {
        setMsjForm('No fue posible enviar tu mensaje');
        setStatusMsj(error);
    }

    const msjInputError = (inputName) => {
      setMsjForm(`El ${inputName} es requerido`);
      setStatusMsj(valueStatus);
  }

    const msjSend = (statusSend) => {

        setMsjForm('Tu mensaje fue enviado con exito');
        setStatusMsj(statusSend);
    }

    const msjReset = () => {
        setMsjForm(initialMsj);
        setStatusMsj(valueStatus);
    }


  return {
    msjForm,
    statusMsj,
    msjError,
    msjInputError,
    msjSend,
    msjReset
  }
}
