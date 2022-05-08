import React from 'react'
import { render, screen } from '@testing-library/react'
import { Render } from './Render'

describe('Rendering', () => {
  it('全ての要素がレンダリングされているか。', () => {
    render(<Render />)
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug(screen.getByRole('heading'))
  })
})
