import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfileComponent({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name={'name'}
      title={'Редактировать профиль'}
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle={'Сохранить'}
      onSubmit={handleSubmit}
    >
      <input
        className='popup__input popup-name__input-name'
        name='name'
        value={name}
        onChange={handleChangeName}
        type='text'
        minLength='2'
        maxLength='40'
        required
      />
      <span className='popup__error' id='name-error'></span>
      <input
        className='popup__input popup-name__input-job'
        name='job'
        value={description}
        onChange={handleChangeDescription}
        type='text'
        minLength='2'
        maxLength='200'
        required
      />
      <span className='popup__error' id='job-error'></span>
    </PopupWithForm>
  );
}

export default EditProfileComponent;
