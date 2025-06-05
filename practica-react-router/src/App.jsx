import { Routes, Route } from "react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from "./components/Navbar"
const App = () =>{
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/acerca' element={<About/>}/>
      <Route path='/contacto' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App