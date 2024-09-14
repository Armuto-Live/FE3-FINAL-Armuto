import React from 'react'
import { useContext } from 'react';
import { ContextGlobal } from '../context/GlobalContext';

const Footer = () => {
  const { theme } = useContext(ContextGlobal);
  return (
    <footer>
      <section>
        <figure>
          <figcaption>Hecho por Luis Armuto, estudiante de</figcaption>
          <img src="../../public/images/DH.png" alt='DH-logo' className={`${theme}`}/>
        </figure>
      </section>
      <section className={`social-icons ${theme}`}>
        <img src="../../public/images/ico-facebook.png" alt="icon facebook" className={`${theme}`}/>
        <img src="../../public/images/ico-instagram.png" alt="icon instagram" className={`${theme}`}/>
        <img src="../../public/images/ico-tiktok.png" alt="icon twitter" className={`${theme}`}/>
        <img src="../../public/images/ico-whatsapp.png" alt="icon linkedin" className={`${theme}`}/>
      </section>
    </footer>
  )
}

export default Footer
