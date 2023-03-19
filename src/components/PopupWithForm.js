import React from 'react';

function PopupWithForm({
  isOpen,
  onClose,
  name,
  title,
  buttonTitle,
  children,
  onSubmit,
  formValid,
}) {

  let className = "popup__submit"

  if (isOpen)
    return (
      <div className={`popup popup-${name} popup_opened`}>
        <div className='popup__container'>
          <form className='popup__form ' name={`popup-${name}`} onSubmit={onSubmit} noValidate>
            <h2 className='popup__title'>{title}</h2>
            {children}
            <button
              className={!formValid?className += ' popup__submit_disabled' : className}
              type='submit'
              aria-label='Сохранить'
              disabled={!formValid}
            >
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
