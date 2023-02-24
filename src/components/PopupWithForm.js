import React, { Children, useEffect } from 'react';

function PopupWithForm(props) {
  

  return (
    <div className={`popup popup-${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <form className='popup__form' name={`popup-${props.name}`} noValidate>
          <h2 className='popup__title'>{props.title}</h2>
          {props.children}
              <button className='popup__submit' type='submit' aria-label='Сохранить'>
            {props.buttonTitle}
          </button>
          <button
            className='popup__close-icon'
            type='button'
            aria-label='закрыть'
            onClick={props.onClose}
          ></button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
