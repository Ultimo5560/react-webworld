import { useState } from 'react'
import { Anuncios, Cabecera, Cards, Form, InfoDesig, Portafolio } from './components'
import { Footer } from './components/Footer';

export const Body = () => {

  const [formApproval, setFormApproval] = useState(true);
  const [cardsApproval, setCardsApproval] = useState(true)


  return (
    <>
        <Cabecera />
        <Anuncios />
        {
          cardsApproval && <Cards />
        }
        
        <InfoDesig />
        <Portafolio />

        {
          formApproval && <Form />
        }

        <Footer />
        
    </>

  )
}
