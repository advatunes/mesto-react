import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);

  const avatarRef = React.useRef(0);

  function handleSubmit(e) {
    e.preventDefault();

    console.log();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name={'avatar'}
      title={'Обновить аватар'}
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle={'Сохранить'}
      onSubmit={handleSubmit}
    >
      <input
        className='popup__input popup-avatar__input-link'
        name='avatar'
        placeholder='Ссылка на аватар'
        type='url'
        ref={avatarRef}
        required
      />
      <span className='popup__error' id='avatar-error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
