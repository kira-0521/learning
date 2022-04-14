import { FC, ReactNode } from 'react'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const LeftIconInInput: FC<Props> = (props: Props) => {
  const { children } = props
  return (
    <InputGroup>
      <InputLeftElement as='button' children={children} />
      <Input />
    </InputGroup>
  )
}
