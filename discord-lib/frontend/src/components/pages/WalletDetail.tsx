import { FC } from 'react'
import { Heading, Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

export const WalletDetail: FC = () => {
  const location = useLocation()
  console.log('location', location)
  return (
    <Box>
      <Heading>WalletDetail</Heading>
    </Box>
  )
}
