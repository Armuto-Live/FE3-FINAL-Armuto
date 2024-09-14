import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextGlobal } from '../context/GlobalContext';

const Navbar = () => {
  const { theme,toggleTheme } = useContext(ContextGlobal);
  return (
    <nav className={`${theme}`}>
      <h1><span style={{color: theme === 'light' ? 'red' : 'red'}}>D</span>H Odonto</h1>
      <section className='nav-links'>
        <Link to="/" className={`link ${theme}`}>Inicio</Link>
        <Link to="/contact" className={`link ${theme}`}>Contacto</Link>
        <Link to="/favs" className={`link ${theme}`}>Favoritos</Link>
        <button className={`navbar_button ${theme} a`} onClick={toggleTheme}>
          {theme === 'light' ? '🌙' : '🌞'}
        </button>
      </section>
    </nav>
  )
}

export default Navbar