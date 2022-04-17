import { FC, memo } from 'react'
import { Input } from '@chakra-ui/react'

type Props = {
  variant?: 'filled' | 'flushed' | 'unstyled'
}

export const TextInput: FC<Props> = memo((props: Props) => {
  return <Input type='text' {...props} />
})
