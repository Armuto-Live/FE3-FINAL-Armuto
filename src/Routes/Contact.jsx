import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contact'>
      <h2 style={{textAlign:"center", fontSize:"2rem"}}>Contacto</h2>
      <h2 className='contact-title'>Quieres saber más?</h2>
      <p className='contact-text'>Envíanos tus preguntas y te contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact