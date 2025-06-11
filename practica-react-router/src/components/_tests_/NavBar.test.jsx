import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Navbar from "../../components/Navbar"

describe('Navbar', () => {
  test('muestra links públicos y login cuando no está autenticado', () => {
    render(
      <MemoryRouter>
        <Navbar isAuth={false} onLogout={() => {}} />
      </MemoryRouter>
    )

    // Links públicos
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /acerca/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contacto/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument()

    // Login visible
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument()

    // Logout no debe aparecer
    expect(screen.queryByRole('button', { name: /logout/i })).not.toBeInTheDocument()
  })

  test('muestra logout cuando está autenticado', async () => {
    const user = userEvent.setup()
    const handleLogout = vi.fn()

    render(
      <MemoryRouter>
        <Navbar isAuth={true} onLogout={handleLogout} />
      </MemoryRouter>
    )

    // Login ya no está
    expect(screen.queryByRole('link', { name: /login/i })).not.toBeInTheDocument()

    // Botón de logout visible
    const logoutButton = screen.getByRole('button', { name: /logout/i })
    expect(logoutButton).toBeInTheDocument()

    // Simular clic en logout
    await user.click(logoutButton)
    expect(handleLogout).toHaveBeenCalled()
  })
})
