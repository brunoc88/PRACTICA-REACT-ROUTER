import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulamos login
    if (email === 'admin@admin.com' && clave === '123') {
      onLogin(); // cambia el estado global
      navigate('/dashboard'); // redirige a ruta protegida
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>Email: 
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Clave:
        <input type="password" value={clave} onChange={(e) => setClave(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
