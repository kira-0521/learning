import React, { useEffect, useState, FC } from 'react'

import './App.css'
import { CleanUp } from './CleanUp'

const App: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [counter, setCounter] = useState(0)
  const [display, setDisplay] = useState(true)

  const onChangedInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='App'>
      <label htmlFor=''>
        <input
          type='text'
          value={inputValue}
          onChange={onChangedInputHandler}
        />
      </label>
      <div>
        <p>Counter</p>
        <p>{counter}</p>
        <button onClick={() => setCounter((preCounter) => preCounter + 1)}>
          count up
        </button>
      </div>
      <div>
        <button onClick={() => setDisplay(!display)}>display CleanUp</button>
        {display && <CleanUp />}
      </div>
    </div>
  )
}

export default App
