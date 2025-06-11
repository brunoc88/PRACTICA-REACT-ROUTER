import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Usuarios from '../../pages/Dashboard/Usuarios'

describe('Usuarios', () => {
  test('renderiza los nombres de usuarios como links', () => {
    render(
      <MemoryRouter>
        <Usuarios />
      </MemoryRouter>
    )

    expect(screen.getByText('Juan')).toBeInTheDocument()
    expect(screen.getByText('Lucía')).toBeInTheDocument()
    expect(screen.getByText('Carlos')).toBeInTheDocument()

    const links = screen.getAllByRole('link')
    // Comprobar que hay la cantidad esperada
    expect(links).toHaveLength(3);
    
    // Verificar rutas
    expect(links[0].getAttribute('href')).toBe('/1')
    expect(links[1].getAttribute('href')).toBe('/2')
    expect(links[2].getAttribute('href')).toBe('/3')

    // Verificar el texto (opcional si ya sabés los nombres)
    expect(links[0]).toHaveTextContent('Juan');
  })
})
