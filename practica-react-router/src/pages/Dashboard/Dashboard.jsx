import { NavLink, Outlet } from "react-router-dom"

const DashBoard = () => {
    return (
        <>
            <h1>Dashboard</h1>
            <nav>
                <NavLink to='usuarios' style={{ marginRight: 10 }}>
                    Usuarios
                </NavLink>
                <NavLink to='ajustes'>
                    Ajustes
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default DashBoard