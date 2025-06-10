import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' // Para que useNavigate funcione
import Login from '../../pages/Login'

describe('Login', () => {
    test('actualiza el valor del input email', () => {
        render(
            <MemoryRouter>
                <Login onLogin={() => { }} />
            </MemoryRouter>
        )

        // Obtenemos el input por la etiqueta Email
        const emailInput = screen.getByLabelText(/Email:/i)

        // Simulamos escribir en el input
        fireEvent.change(emailInput, { target: { value: 'admin@admin.com' } })

        // Verificamos que el valor cambió
        expect(emailInput.value).toBe('admin@admin.com')
    })

    test('los inputs actualizan su valor cuando el usuario escribe', () => {
        render(
            <MemoryRouter>
                <Login onLogin={() => { }} />
            </MemoryRouter>
        )

        const emailInput = screen.getByLabelText(/email/i)
        const claveInput = screen.getByLabelText(/clave/i)

        fireEvent.change(emailInput, { target: { value: 'admin@admin.com' } })
        fireEvent.change(claveInput, { target: { value: '123' } })

        expect(emailInput.value).toBe('admin@admin.com')
        expect(claveInput.value).toBe('123')
    })

})
