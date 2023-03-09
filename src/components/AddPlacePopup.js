import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      name={'place'}
      title={'Новое место'}
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle={'Создать'}
      onSubmit={handleSubmit}
    >
      <label className='popup__form-field'>
        <input
          className='popup__input popup-place__input-place'
          name='place'
          placeholder='Название'
          type='text'
          minLength='2'
          maxLength='30'
          onChange={handleChangeName}
          value={name}
          required
        />
        <span className='popup__error' id='place-error'></span>
      </label>
      <label className='popup__form-field'>
        <input
          className='popup__input popup-place__input-link'
          name='link'
          placeholder='Ссылка на картинку'
          type='url'
          onChange={handleChangeLink}
          value={link}
          required
        />
        <span className='popup__error' id='link-error'></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
