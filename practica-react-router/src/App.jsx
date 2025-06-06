import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LayOut from "./components/Layout"
import DashBoard from "./pages/Dashboard/Dashboard"
import Usuarios from './pages/Dashboard/Usuarios'
import Ajustes from './pages/Dashboard/Ajustes'
import UsuarioDetalle from './pages/Dashboard/UsuarioDetalle'
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<LayOut />}>
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<About />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/dashboard' element={<DashBoard />}>
            <Route path="usuarios" element={<Usuarios />} />
            <Route path="usuarios/:id" element={<UsuarioDetalle />} />
            <Route path="ajustes" element={<Ajustes />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App