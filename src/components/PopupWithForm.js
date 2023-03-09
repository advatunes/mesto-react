import React, { Children, useEffect } from 'react';

function PopupWithForm({ isOpen, onClose, name, title, buttonTitle, children, onSubmit }) {
  if (isOpen)
    return (
      <div className={`popup popup-${name} popup_opened`}>
        <div className='popup__container'>
          <form className='popup__form' name={`popup-${name}`} onSubmit={onSubmit}>
            <h2 className='popup__title'>{title}</h2>
            {children}
            <button className='popup__submit' type='submit' aria-label='Сохранить'>
              {buttonTitle}
            </button>
            <button
              className='popup__close-icon'
              type='button'
              aria-label='закрыть'
              onClick={onClose}
            ></button>
          </form>
        </div>
      </div>
    );
  else return null;
}

export default PopupWithForm;
