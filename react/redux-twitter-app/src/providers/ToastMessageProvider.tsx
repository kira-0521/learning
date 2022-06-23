import React, {
  createContext,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'

type Props = {
  children: ReactNode
}

type state = {
  showMessage: string
  type: 'success' | 'info' | 'warning' | 'error'
}

export type ToastMessageContext = {
  toastState: state
  setToastState: Dispatch<SetStateAction<state>>
}

export const ToastMessageContext = createContext<ToastMessageContext>(
  {} as ToastMessageContext
)

export const ToastMessageProvider: FC<Props> = (props: Props) => {
  const { children } = props

  const [toastState, setToastState] = useState<state>({
    showMessage: '',
    type: 'success',
  })

  return (
    <ToastMessageContext.Provider value={{ toastState, setToastState }}>
      {children}
    </ToastMessageContext.Provider>
  )
}
