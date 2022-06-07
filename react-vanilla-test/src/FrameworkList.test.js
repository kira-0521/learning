import React from 'react'
import FrameworkList from './FrameworkList'
import { render, screen } from '@testing-library/react'

const setup = () => {
  const dummyData = [
    { id: 1, item: 'React dummy' },
    { id: 2, item: 'Angular dummy' },
    { id: 3, item: 'Vue dummy' },
  ]
  return {
    dummyData,
  }
}

describe('Rendering the list with props', () => {
  const { dummyData } = setup()
  it('Should render No data ! when no data propped', () => {
    render(<FrameworkList />)
    expect(screen.getByText('No Data !')).toBeInTheDocument()
  })

  it('Should render list item correctly', () => {
    render(<FrameworkList frameworks={dummyData} />)
    const frameworkItems = screen
      .getAllByRole('listitem')
      .map((el) => el.textContent)
    const dummyItems = dummyData.map((el) => el.item)
    expect(frameworkItems).toEqual(dummyItems)
    expect(screen.queryByText('No Data !')).toBeNull()
  })
})
