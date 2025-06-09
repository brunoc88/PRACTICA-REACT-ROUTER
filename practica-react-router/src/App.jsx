import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LayOut from "./components/Layout"
import DashBoard from "./pages/Dashboard/Dashboard"
import Usuarios from './pages/Dashboard/Usuarios'
import Ajustes from './pages/Dashboard/Ajustes'
import UsuarioDetalle from './pages/Dashboard/UsuarioDetalle'
import Login from "./pages/Login"

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const handleLogin = () => setIsAuth(true);
  const handleLogout = () => setIsAuth(false);
  return (
    <>
      <Routes>
        {/* Todas las rutas comparten el mismo layout */}
        <Route element={<LayOut isAuth={isAuth} onLogout={handleLogout} />}>
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<About />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
           {/* Rutas protegidas */}
          <Route path='/dashboard' element={isAuth ? <DashBoard /> : <Navigate to="/login" />}>
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="usuarios/:id" element={<UsuarioDetalle />} />
            <Route path="ajustes" element={<Ajustes />} />
          </Route>
        </Route>
         {/* Ruta 404 fuera del layout */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App