import { Link } from "react-router-dom";

const Usuarios = () => {
  const usuarios = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Lucía" },
    { id: 3, nombre: "Carlos" },
  ];

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map(user => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
