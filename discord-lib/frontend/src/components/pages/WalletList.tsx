import { FC } from 'react'
import { Heading, Box, Flex } from '@chakra-ui/react'
import { WalletListTable } from '../organisms/Layouts/WalletListTable'

export const WalletList: FC = () => {
  return (
    <Box>
      <Heading>WalletListTable</Heading>
      <Flex justify='center' mt='30px'>
        <WalletListTable />
      </Flex>
    </Box>
  )
}
