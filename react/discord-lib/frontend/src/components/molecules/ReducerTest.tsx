import React, { FC, useReducer } from 'react'
import {
  countInitialState,
  countReducer,
} from '../../scripts/controllers/countController'

export const ReducerTest: FC = () => {
  const [state, dispatch] = useReducer(
    countReducer,
    countInitialState,
    undefined
  )
  return (
    <div>
      count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <br />
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
      <br />
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  )
}
