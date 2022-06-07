import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, fireEvent } from '@testing-library/react'
import MockServer from './MockServer'

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: 'bred dummy' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => server.close())

describe('Mocking API', () => {
  it('[Fetch success]Should display fetched data correctly and button disable', async () => {
    render(<MockServer />)
    fireEvent.click(screen.getByRole('button'))
    expect(await screen.findByRole('heading')).toHaveTextContent('bred dummy')
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })

  it('[Fetch failure]Should display error message, no render heading and button abled', async () => {
    server.use(
      setupServer(
        rest.get(
          'https://jsonplaceholder.typicode.com/users/1',
          (req, res, ctx) => {
            return res(ctx.status(404))
          }
        )
      )
    )
    render(<MockServer />)
    fireEvent.click(screen.getByRole('button'))
    expect(await screen.findByTestId('error')).toHaveTextContent(
      'Fetching Failed !'
    )
    expect(screen.queryByRole('heading')).toBeNull()
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
  })
})
