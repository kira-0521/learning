import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { signInAction } from './reducks/users/actions'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)

  console.log(selector.users)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button
            type='button'
            onClick={() =>
              dispatch(signInAction({ uid: '00001', username: 'tanakakira' }))
            }>
            SIGN IN
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'>
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
