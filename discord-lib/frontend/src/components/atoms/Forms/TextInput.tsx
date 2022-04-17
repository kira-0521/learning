import { FC, memo } from 'react'
import { Input, TextProps } from '@chakra-ui/react'

export const TextInput: FC<TextProps> = memo((props: TextProps) => {
  return <Input type='text' {...props} />
})
