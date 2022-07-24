import { createContext, Dispatch, FC, ReactNode, useReducer } from 'react'
import {
  ToastAction,
  toastInitialState,
  toastReducer,
  ToastState,
} from '../scripts/controllers/toastController'

type ToastContextType = {
  state: ToastState
  dispatch: Dispatch<ToastAction>
}

export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType
)

type Props = { children: ReactNode }

export const ToastProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, toastInitialState)
  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  )
}
