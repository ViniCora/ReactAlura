import React from 'react';
import Logo from '../../assets/img/Logo Header.png';
/* import ButtonLink from './components/ButtonLink/buttonLink.js'; */
import Button from '../Button/';
import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Netflix And Chill" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo filme/série
      </Button>
    </nav>
  );
}

export default Menu;
