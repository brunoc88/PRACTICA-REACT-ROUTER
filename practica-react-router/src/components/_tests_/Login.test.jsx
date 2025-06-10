import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Login from '../../pages/Login'

const mockedUsedNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockedUsedNavigate,
  }
})

describe('Login', () => {
  beforeEach(() => {
    mockedUsedNavigate.mockReset()
    window.alert = vi.fn() // mockear alert global antes de cada test
  })

  test('los inputs actualizan su valor correctamente', () => {
    render(
      <MemoryRouter>
        <Login onLogin={() => {}} />
      </MemoryRouter>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const claveInput = screen.getByLabelText(/clave/i)

    fireEvent.change(emailInput, { target: { value: 'admin@admin.com' } })
    fireEvent.change(claveInput, { target: { value: '123' } })

    expect(emailInput.value).toBe('admin@admin.com')
    expect(claveInput.value).toBe('123')
  })

  test('submit con credenciales válidas llama a onLogin y navega a /dashboard', () => {
    const onLoginMock = vi.fn()

    render(
      <MemoryRouter>
        <Login onLogin={onLoginMock} />
      </MemoryRouter>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const claveInput = screen.getByLabelText(/clave/i)
    const submitBtn = screen.getByRole('button', { name: /login/i })

    fireEvent.change(emailInput, { target: { value: 'admin@admin.com' } })
    fireEvent.change(claveInput, { target: { value: '123' } })
    fireEvent.click(submitBtn)

    expect(onLoginMock).toHaveBeenCalled()
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/dashboard')
  })

  test('submit con credenciales inválidas muestra alerta', () => {
    const onLoginMock = vi.fn()

    render(
      <MemoryRouter>
        <Login onLogin={onLoginMock} />
      </MemoryRouter>
    )

    const emailInput = screen.getByLabelText(/email/i)
    const claveInput = screen.getByLabelText(/clave/i)
    const submitBtn = screen.getByRole('button', { name: /login/i })

    fireEvent.change(emailInput, { target: { value: 'error@error.com' } })
    fireEvent.change(claveInput, { target: { value: 'wrong' } })
    fireEvent.click(submitBtn)

    expect(onLoginMock).not.toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalledWith('Credenciales inválidas')
  })
})
