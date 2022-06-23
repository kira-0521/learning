import { memo, VFC, ChangeEvent } from 'react'
import { Input } from '@chakra-ui/react'

type Props = {
  id?: string
  value: string | number
  isReadOnly?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const TextInput: VFC<Props> = memo((props) => {
  const { id, value, isReadOnly, onChange } = props

  return (
    <Input id={id} value={value} onChange={onChange} isReadOnly={isReadOnly} />
  )
})
