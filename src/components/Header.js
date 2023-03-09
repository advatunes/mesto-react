import React from 'react';
import logo from '../images/header__logo.svg';

function Header() {
  return (
    <header className='header'>
      <a className='header__logo' href='#'>
        <img className='header__logo-img' src={logo} alt='логотип' />
      </a>
    </header>
  );
}

export default Header;
