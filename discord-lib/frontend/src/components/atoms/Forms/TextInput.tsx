import { FC } from 'react'
import { Input } from '@chakra-ui/react'

type Props = {
  variant?: 'filled' | 'flushed' | 'unstyled'
}

export const TextInput: FC<Props> = (props: Props) => {
  return <Input type='text' {...props} />
}
