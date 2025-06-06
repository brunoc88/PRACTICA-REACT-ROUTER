import { NavLink } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
                        Home
                    </NavLink>
                </li>                
                <li>
                    <NavLink to='/acerca' className={({ isActive }) => isActive ? 'active' : ''}>
                        Acerca 
                    </NavLink>
                </li>                
                <li>
                    <NavLink to='/contacto' className={({ isActive }) => isActive ? 'active' : ''}>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'active' : ''}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar