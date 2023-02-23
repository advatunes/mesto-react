import React, { Children, useEffect } from 'react';

function PopupWithForm(props) {
  // const [isOpen, setOpen] = React.useState(props.isOpen);
  //isOpen, name, title, children
  //  useEffect(() => {
  //    console.log(isOpen,props);
  //  });
  // var func1 = () => {
  // setOpen(!isOpen);

  // };

  // if (!props.isOpen) {
  //   console.log(`popup-${props.name}`.classList.add('popup_opened'))
  //   // {`popup-${props.name}`.classList.add('popup_opened')};
  // }

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
