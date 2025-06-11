import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Dashboard from '../../pages/Dashboard/Dashboard'

describe('Dashboard', () => {
  test('renderiza el título y los enlaces de navegación', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    )

    // Verifica título
    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument()

    // Verifica enlaces
    const usuariosLink = screen.getByRole('link', { name: /usuarios/i })
    const ajustesLink = screen.getByRole('link', { name: /ajustes/i })

    expect(usuariosLink).toBeInTheDocument()
    expect(ajustesLink).toBeInTheDocument()

    // Verifica rutas relativas
    expect(usuariosLink.getAttribute('href')).toBe('/usuarios')
    expect(ajustesLink.getAttribute('href')).toBe('/ajustes')
  })
})
