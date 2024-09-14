import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, addFav, theme }) => {

  const handleAddFav = () => {
    const dentist = { name, username, id };
    addFav(dentist);
  }

  return (
    <div key={id} className={`card ${theme}`}>
      <img src="https://cdn-icons-png.flaticon.com/512/6620/6620101.png" alt="doc" className="card__image" /> 
      <h3>{name}</h3>
      <p>{username}</p>
      <div style={{width: "100%", display:"flex", justifyContent:"flex-end"}}><Link to={`/dentist/${id}`} className={`card-link ${theme}`}>Ver detalle {'>'} </Link></div>
      
      <button onClick={handleAddFav} className={`favButton ${theme}`}>Agregar a favoritos</button>
    </div>
  );
};

export default Card;
