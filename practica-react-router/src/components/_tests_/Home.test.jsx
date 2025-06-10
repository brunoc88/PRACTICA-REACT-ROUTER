import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../../pages/Home'

test('renderiza el título Home', () => {
  render(<Home />)
  screen.debug() // esto imprime el HTML del componente en la consola
  expect(screen.getByText(/home/i)).toBeInTheDocument()
})

