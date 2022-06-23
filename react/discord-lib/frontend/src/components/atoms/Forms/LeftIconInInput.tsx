import { FC, ReactNode, memo } from 'react'
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputProps,
} from '@chakra-ui/react'

export const LeftIconInInput: FC<InputProps> = memo((props: InputProps) => {
  const { children } = props
  return (
    <InputGroup>
      <InputLeftElement as='button' children={children} />
      <Input />
    </InputGroup>
  )
})
