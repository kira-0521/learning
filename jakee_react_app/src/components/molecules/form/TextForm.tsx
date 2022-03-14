import { memo, VFC, ReactNode, ChangeEvent } from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  value: string | number
  isReadOnly?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextForm: VFC<Props> = memo((props) => {
  const { children, value, isReadOnly, onChange } = props

  return (
    <FormControl>
      <FormLabel>{children}</FormLabel>
      <Input value={value} onChange={onChange} isReadOnly={isReadOnly} />
    </FormControl>
  )
})
