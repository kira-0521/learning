import { FC } from 'react'
import { Heading, Box, Flex } from '@chakra-ui/react'
import { WalletListTable } from '../organisms/Layouts/WalletListTable'
import { WalletListTableWithChakra } from '../organisms/Layouts/WalletListTableWithChakra'

export const WalletList: FC = () => {
  return (
    <Box>
      <Heading>WalletListTable</Heading>
      <Flex justify='center' mt='30px'>
        {/* <WalletListTable /> */}
        <WalletListTableWithChakra />
      </Flex>
    </Box>
  )
}
