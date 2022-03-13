import { memo, VFC, ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  onClick: () => void
}

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, isDisabled = false, isLoading = false, onClick } = props

  return (
    <Button
      bg='teal.400'
      color='white'
      isLoading={isLoading}
      isDisabled={isDisabled || isLoading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}>
      {children}
    </Button>
  )
})
