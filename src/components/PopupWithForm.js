import React, { Children, useEffect } from 'react';

function PopupWithForm(props) {
  if(props.isOpen)
  return (
    <div className={`popup popup-${props.name} popup_opened`}>
      <div className='popup__container'>
        <form className='popup__form' name={`popup-${props.name}`} onSubmit={props.onSubmit} noValidate>
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
  else return null;
}

export default PopupWithForm;
