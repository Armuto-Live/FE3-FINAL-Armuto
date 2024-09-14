import React from "react";
import Card from "../Components/Card";
import { useContext } from 'react';
import { ContextGlobal } from '../context/GlobalContext';

const Favs = () => {
  const { favs, theme } = useContext(ContextGlobal);
  return (
    <>
      <h1>Dentitas Favoritos</h1>
      <div className={`card-grid ${theme}`}>
        {
          favs.map((dentist, index) => (
            <Card key={index} name={dentist.name} username={dentist.username} id={dentist.id} theme={theme}/>
          ))
        }
      </div>
    </>
  );
};

export default Favs;
