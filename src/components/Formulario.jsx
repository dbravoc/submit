import { useState } from 'react';

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email.indexOf('@') === -1) {
      setError('Por favor ingrese un email válido.');
      setSuccess(''); 
    } else if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Registro exitoso.');
    }
  };

  return (
    <form className='d-flex flex-column' onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre y apellido"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="correo electrónico"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="contraseña"
      />
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="reingresa tu contraseña"
      />
<button type="submit" className="btn btn-primary">Registrarse</button>
    </form>
  );
};

export default Formulario;
