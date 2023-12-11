import { useState, useEffect  } from "react";
import { getCaractById } from "../helpers/getCaractById";
import { CardsInfo } from "./body/CardsInfo";
import { PayPalButton } from "react-paypal-button-v2";
import { REACT_APP_PAYPAL_CLIENT_ID } from './../../config';
import emailjs from 'emailjs-com';
import {getPhone} from './../components/body/components/formPagos/GetNumberClient';
import { useNavigate } from 'react-router-dom';
import { createId } from './../helpers/createIdPaye';
import { CabeceraOtherPage } from "./body/CabeceraOtherPage";



export const ListCaract = ({id}) => {
    const [height, setHeight] = useState(250 + 'px');
    const [compras, setCompras] = useState([]);
    const caract = getCaractById(id);
    const precio = caract[0].precio;
    const navigate = useNavigate();


    const resizeDiv = () => {
      const [divCaract] = document.getElementsByClassName('card_pay__caract');
      const [btnMas] = document.getElementsByClassName('card__mas_btn');

      if (height != divCaract.scrollHeight + 'px') {
        setHeight(divCaract.scrollHeight + 'px')
        btnMas.replaceChildren('Ver menos')
      } else {
        setHeight(220 + 'px')
        btnMas.replaceChildren('Ver más')
      }
    }


    const sendEmail = async (details, data) => {
      const phone = await getPhone();
      const id = await createId();
      const datos = {
        id: id,
        nombre: details.payer.name.given_name,
        apellidos: details.payer.name.surname,
        direccion: details.purchase_units[0].shipping.address.address_line_1 + '. Col. ' + details.purchase_units[0].shipping.address.address_line_2,
        email: details.payer.email_address,
        celular: phone,
        plan: caract[0].plan,
        amount: details.purchase_units[0].amount.value,
        order_id: data.orderID,
      };

      // Enviamos correo al vendedor
      emailjs.send(
        'service_k8xharf',
        'template_i8v6xgp',
        datos,
        'vGHLTo1P69jfVHqMq',
        );

        
      const compraActual = JSON.parse(localStorage.getItem('datosPay')) || [];
      const compraActualizada = [...compraActual, datos];
      localStorage.setItem('datosPay', JSON.stringify(compraActualizada));


      // Navegamos a otra pantalla
      navigate('/historial');
      
    }



  return (
    <>
      <CabeceraOtherPage />
      <div className="card__pay">
      

        {
        caract.map(plan => (
          <div className="card_par" key={plan.id}>
            <h2 className="card_pay__title">Plan {plan.plan}</h2>
            <p className="card_pay__support">{plan.soporte}</p>
            <h1 className="card_pay__precio">${new Intl.NumberFormat('en-US').format(plan.precio)}</h1>
            <section
             className="card_pay__caract"
             style={{ height }}
            >
              <CardsInfo caract={plan.caracteristicas} />
              <button 
                className="card__mas_btn"
                onClick={resizeDiv}
              >
                Ver más
              </button> 
            </section> 

            <div className="card_pay__paypal">
          <PayPalButton
            amount={precio}
            onSuccess={sendEmail
              // (details, data)=> {
              // alert("Pago completado por " + details.payer.name.given_name);
              // console.log(data);
              // console.log(details);
              // console.log(details.payer.payer_info.phone.phone_number.national_number);
            }
            options={{
              clientId: REACT_APP_PAYPAL_CLIENT_ID,
              currency: "MXN",
              locale: "es_MX",

              // disableFunding: ["phone"], // Desactivar el campo del número de teléfono
            }}
          />
        </div>
          </div>  
        ))
        }


      </div>
    </>
  )
}
