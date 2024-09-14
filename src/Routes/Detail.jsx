import React,{ useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ContextGlobal } from '../context/GlobalContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  const { dentistDetail, fetchDentistDetail } = useContext(ContextGlobal);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    fetchDentistDetail(id);
  }, [id]);
  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <div>
      {dentistDetail ? (
        <table className="detail-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{dentistDetail.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{dentistDetail.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{dentistDetail.phone}</td>
            </tr>
            <tr>
              <td>Website</td>
              <td>{dentistDetail.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Cargandoooo...</p>
      )}
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail