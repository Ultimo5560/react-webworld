import { Link } from 'react-router-dom';

export const CabeceraOtherPage = () => {

  return (
    <>
        <header className="hero">
            <nav className="nav container">
                <figure className="nav__logo">
                    <Link to="/">
                        <img className="nav__img" src={'../logoai.png'} alt="Inicio" />
                    </Link>  
                </figure>
            </nav>
        </header>
    </>
  )
}