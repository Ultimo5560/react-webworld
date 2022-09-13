// import {useState} from 'react'
import IconBarrX from './header/IconBarraX';
import { iconCab } from './header/iconCab';
import { Anuncios } from './body/Anuncios';



const Cabecera = () => {

    const onClick = () => {
        const menuButton = document.querySelector('.nav__links');
        
        menuButton.classList.toggle('open');

        if (menuButton.className.includes('open')) {
            const button = document.querySelector('.barr');
            const buttonX = document.querySelector('.x');
            const active = true
            iconCab(button, buttonX, active);
        } else {
            const button = document.querySelector('.barr');
            const buttonX = document.querySelector('.x');
            const active = false
            iconCab(button, buttonX, active);
        }

    }
  return (
    <>
        <header className="hero">
            <nav className="nav container">
                <figure className="nav__logo">
                    <img className="nav__img" src="#" alt="" />
                </figure>
                <div className="nav__links" id="menu" onClick={onClick}>
                    <a className="nav__link" href="#precios">precios</a>
                    <a className="nav__link" href="#aboutus">sobre nosotros</a>
                    <a className="nav__link" href="#portafolio">Portafolio</a>
                    <a className="nav__link" href="#contact">contacto</a>
                </div>
                <a href="#menu" className="nav__menu" onClick={onClick}>
                    <img className="nav__menu_img barr" src='../../public/bx-menu.svg' alt="" />
                    <img className="nav__menu_img x" src='../../public/bx-x.svg' alt="" />
                </a>
            </nav>
        </header>
    </>
  )
}

export default Cabecera;