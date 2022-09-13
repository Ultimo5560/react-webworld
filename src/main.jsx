import React from 'react'
import ReactDOM from 'react-dom/client'
import Anuncios from './components/body/anuncios'
import Cards from './components/body/Cards'
import Form from './components/body/Form'
import InfoDesig from './components/body/InfoDesig'
import Portafolio from './components/body/Portafolio'
import Cabecera from './components/Cabecera'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cabecera />
    <Anuncios />
    <Cards />
    <InfoDesig />
    <Portafolio />
    <Form/>
  </React.StrictMode>
)
