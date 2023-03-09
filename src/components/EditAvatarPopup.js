import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [avatar, setAvatar] = React.useState('');

  React.useEffect(() => {
    setAvatar(currentUser.avatar);;
  }, [currentUser]);


  const avatarRef = React.useRef(0);
//   console.log(avatar);

  function handleChangeLink(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar,
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
        onChange={handleChangeLink}
        required
      />
      <span className='popup__error' id='avatar-error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
