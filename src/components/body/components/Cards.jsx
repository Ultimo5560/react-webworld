import { Link } from 'react-router-dom';
import { cards } from '../../../data/cards';
import { CardsInfo, CardsTitle, CardsQuestion } from '../CardsInfo/index';

export const Cards = () => {
    const dataPricing = cards;
  return (
    <>  
        <section className="card" id="precios">
          < CardsTitle />
          {
            dataPricing.map(card => (
              <div 
                className={`card__item card__item--${card.id==='emp-02'?'active':''}`} 
                key={card.id}
              >
                <h3 className="card__plan">{card.plan}</h3>
                <h3 className="card__price">${new Intl.NumberFormat('en-US').format(card.precio)}</h3>
                <p className="card__features card__features--margin">{card.soporte}</p>
                <section className={`card__div--${card.plan.toLowerCase()}`}>
                  <CardsInfo caract={card.caracteristicas} />
                </section>
                <Link to={`/${card.plan.toLowerCase()}`} className="card__cta">Compralo ahora</Link>
              </div>
            ))
          }
          <CardsQuestion />
        </section>
    </>
  )
}