import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  FC,
} from 'react'

type MoneyUnitContextType = {
  unit: 'ETH' | 'USD'
  setUnit: Dispatch<SetStateAction<'ETH' | 'USD'>>
}

export const MoneyUnitContext = createContext<MoneyUnitContextType>(
  {} as MoneyUnitContextType
)

type Props = { children: ReactNode }

export const MoneyUnitProvider: FC<Props> = ({ children }) => {
  const [unit, setUnit] = useState<MoneyUnitContextType['unit']>('ETH')
  return (
    <MoneyUnitContext.Provider value={{ unit, setUnit }}>
      {children}
    </MoneyUnitContext.Provider>
  )
}
