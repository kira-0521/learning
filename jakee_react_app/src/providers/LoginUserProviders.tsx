import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from 'react'

import { User } from '../types/api/user'

type LoginUser = User & { isAdmin: boolean }

export type LoginUserContextType = {
  loginUser: LoginUser | null
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
)

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null)
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
