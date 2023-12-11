import React from 'react';

export const RenderNotPaye = () => {
  return (
    <div className='content__not_paye'>
      <img className="not__found_svg" src={`../not-found.svg`} alt="" />
      <p>
        Lo sentimos, no has solicitado ninguna plan
      </p>
    </div>
  )
}
