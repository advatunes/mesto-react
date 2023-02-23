import React from 'react';

function Main(props) {
  return (
    <main className='content'>
      <section className='profile content__profile'>
        <img
          className='profile__avatar'
          alt='аватар'
          src='#'
          onClick={props.onEditAvatar}
        />
        <div className='profile__avatar-hover'></div>

        <div className='profile__info'>
          <div className='profile__name-wrap'>
            <h1 className='profile__name'></h1>
            <button
              className='profile__edit-button'
              type='button'
              aria-label='Редактировать профиль'
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className='profile__job'></p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          aria-label='Добавить карточку'
          onClick={props.onAddPlace }
        ></button>
      </section>

      <section className='elements'></section>
    </main>
  );
}

export default Main;
