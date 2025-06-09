import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);
    navigate("/perfil");
  };

  return <button onClick={handleLogin}>Iniciar sesión</button>;
};
