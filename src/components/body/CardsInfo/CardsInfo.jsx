


export const CardsInfo = (...props) => {

    const [caract] = props;

  return (
    <>
        {caract.caract.map(element => (
            <p key={element} className="card__features">{element}</p>
        ))}
        
    </>
  )
}
