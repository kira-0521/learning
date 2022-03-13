import { memo, VFC, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props

  return (
    <Button bg='teal.400' color='white' _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  )
})
