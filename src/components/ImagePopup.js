import React from 'react';

function PopupWithForm(props) {
    return (

        <div className='popup popup-image'>
        <div className='popup-image__container'>
          <img className='popup-image__pic' src='#' alt='#' />
          <h2 className='popup-image__title'></h2>
          <button className='popup__close-icon' type='button' aria-label='закрыть'></button>
        </div>
      </div>
    );
  }

  export default PopupWithForm;
