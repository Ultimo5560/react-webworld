
const IconBarrX = (resp) => {

  console.log(resp.event);


  return (
    <img 
      className="nav__menu_img" 
      src={resp.event} 
      alt="" 
    />

  )
}

export default IconBarrX;