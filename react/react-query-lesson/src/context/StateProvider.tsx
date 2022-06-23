import React, { createContext, useState, useContext, ReactNode } from 'react'
import { Task } from '../@types/types.d'

interface StateContextType {
  tasks: Task[] | null
  dark: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

interface Props {
  children: ReactNode
}

const StateContext = createContext({} as StateContextType)
export const StateProvider: React.FC<Props> = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [dark, setDark] = useState(false)
  return (
    <StateContext.Provider value={{ tasks, setTasks, dark, setDark }}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = (): StateContextType => useContext(StateContext)
