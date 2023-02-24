import React from 'react';

function Card(props) {

  function handleClick() {
   return  props.onCardClick(props.card);
  }



  return (
    <article className='element'>
      <img className='element__image' src={props.link} alt={props.name} onClick={handleClick} />
      <button className='element__trash-icon' type='button' aria-label='удалить'></button>
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
