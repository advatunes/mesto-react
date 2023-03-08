import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__like-btn ${isLiked && 'element__like_active'}`
  );
  // console.log(props.card.owner._id);

  function handleClick() {
    return props.onCardClick(props.card);
  }

  return (
    <article className='element'>
      <img className='element__image' src={props.link} alt={props.name} onClick={handleClick} />
      {isOwn && (
        <button className='element__trash-icon' type='button' aria-label='удалить'></button>
      )}
      <div className='element__info'>
        <h2 className='element__name'>{props.name}</h2>
        <div className='element__like'>
          <button className='element__like-btn' type='button' aria-label='лайк'></button>
          <p className='element__like-counter'>{props.likes}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
