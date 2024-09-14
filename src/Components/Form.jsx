import React,{useState} from "react";
import { useContext } from "react";
import { ContextGlobal } from "../context/GlobalContext";

const Form = () => {
  const { theme } = useContext(ContextGlobal);


  const [formData, setFormData] = useState({ name: '', email: '' });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitedName, setSubmitedName] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.length > 5 && /\S+@\S+\.\S+/.test(formData.email)) {
      setSuccess(true);
      setError(false);
      setSubmitedName(formData.name);
    } else {
      setError(true);
      setSuccess(false);
    }
  };
  return (
    <div className={`form-container ${theme}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${theme}`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${theme}`}
        />
        <input
          type="text"
          name="Descripción"
          placeholder="Descripción"
          className={`form-input ${theme}`}
          required
          />

        <button className="form-button" type="submit">Submit</button>
      </form>
      {error && <p>Por favor verifica tu información nuevamente</p>}
      {success && <p>Gracias {submitedName}, te contactaremos cuando antes vía mail</p>}
    </div>
  );
};

export default Form;
