import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import RenderInput from './RenderInput'

const setup = () => {
  const utils = [render(<RenderInput />)]
  const input = screen.getByPlaceholderText('Enter')
  const button = screen.getByRole('button')
  return {
    input,
    button,
    ...utils,
  }
}

describe('Rendering', () => {
  it('Should render all the elements correctly', () => {
    const { input, button } = setup()
    expect(button).toBeTruthy()
    expect(input).toBeTruthy()
  })
})

describe('Input form onChange event', () => {
  it('Should update input value correctly', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'test' } })
    expect(input.value).toBe('test')
  })
})
