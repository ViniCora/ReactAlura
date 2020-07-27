import React from 'react';
import Logo from '../../assets/img/Logo Header.png';
/* import ButtonLink from './components/ButtonLink/buttonLink.js'; */
import Button from '../Button/';
import './menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Netflix And Chill" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
