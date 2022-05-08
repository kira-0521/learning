import React from 'react'
import { render, screen } from '@testing-library/react'
import { Render } from './Render'

describe('Rendering', () => {
  it('要素がレンダリングされているか。', () => {
    render(<Render />)
    // eslint-disable-next-line testing-library/no-debugging-utils
    // 取得
    // screen.debug(screen.getByRole('heading'))
    // 存在チェック
    expect(screen.getByRole('heading')).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
