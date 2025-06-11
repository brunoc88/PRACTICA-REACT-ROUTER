import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import UsuarioDetalle from '../../pages/Dashboard/UsuarioDetalle'

describe('UsuarioDetalle', () => {
  test('muestra el id recibido desde la URL', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard/usuarios/42']}>
        <Routes>
          <Route path="/dashboard/usuarios/:id" element={<UsuarioDetalle />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText(/Estás viendo al usuario con ID:/i)).toHaveTextContent('42')
  })
})
/*
2. ¿Por qué en UsuarioDetalle.test.jsx usamos <Routes><Route><UsuarioDetalle /></Route></Routes> en vez de solo montar UsuarioDetalle directo?
¡Excelente pregunta! Es por useParams. El componente UsuarioDetalle necesita leer id desde los parámetros de la URL, y para eso:

Necesita estar dentro de un <Route path="/algo/:id">

Y ese <Route> debe estar dentro de <Routes>
 Esto le da a useParams() el contexto para devolver { id: '5' }.

Si montaras directamente <UsuarioDetalle /> fuera de una Route, useParams devolvería undefined.
 */