// src/context/AuthContext.jsx
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acceder fácilmente
export const useAuth = () => useContext(AuthContext);

/*¿Por qué usar un contexto?
Hasta ahora estás usando un useState en App.jsx para manejar el estado de isAuth, y lo pasás como prop a componentes que lo necesitan. Eso funciona, pero:

Es engorroso si muchos componentes lo necesitan.

Cada vez que querés acceder/modificar isAuth, tenés que "subir" o "pasar" props.

Si crece tu app, esto se vuelve difícil de escalar.

💡 Solución: Contexto (React.createContext)
Un contexto te permite crear un "proveedor" global de datos, en este caso, AuthContext, para que cualquier componente pueda acceder a isAuth y setIsAuth sin prop drilling (sin andar pasándolos como props de componente en componente).
*/