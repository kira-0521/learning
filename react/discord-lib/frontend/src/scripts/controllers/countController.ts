export type CountState = { count: number }

export type CountAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }

export const countInitialState = { count: 0 }

export const countReducer = (
  state: CountState,
  action: CountAction
): CountState => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
    default:
      return countInitialState
  }
}
