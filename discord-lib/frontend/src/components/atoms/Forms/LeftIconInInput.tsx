import { FC, ReactNode, memo } from 'react'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const LeftIconInInput: FC<Props> = memo((props: Props) => {
  const { children } = props
  return (
    <InputGroup>
      <InputLeftElement as='button' children={children} />
      <Input />
    </InputGroup>
  )
})
