import React from 'react'
import UseEffectRender from './UserEffectRender'
import { render, screen } from '@testing-library/react'

describe('useEffect rendering', () => {
  it('Should render only after async function resolved', async () => {
    render(<UseEffectRender />)
    expect(screen.queryByText(/I am/)).toBeNull()
    expect(await screen.findByText(/I am/)).toBeInTheDocument()
  })
})
