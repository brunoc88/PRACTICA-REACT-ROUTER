import { useParams } from "react-router-dom";

const UsuarioDetalle = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalle del Usuario</h2>
      <p>Estás viendo al usuario con ID: <strong>{id}</strong></p>
    </div>
  );
};

export default UsuarioDetalle;
