import { FC } from 'react'
import { Heading, Box, Flex } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

import { WalletListTable } from '../organisms/Layouts/WalletListTable'

export const WalletList: FC = () => {
  const location = useLocation()
  console.log('location', location)
  return (
    <Box>
      <Heading>WalletListTable</Heading>
      <Flex justify='center' mt='30px'>
        <WalletListTable />
      </Flex>
    </Box>
  )
}
