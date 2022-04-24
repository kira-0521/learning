import { FC } from 'react'
import { Heading, Box, Flex } from '@chakra-ui/react'

import { WalletListTable } from '../organisms/Layouts/WalletListTable'
import { WalletAccordionGroup } from '../organisms/Accordions/WalltAccordionGroup'
import { DrawerExample } from '../molecules/Drawer'
import { TagFilter } from '../organisms/TagFilter'

export const WalletList: FC = () => {
  return (
    <Box>
      <Heading>WalletListTable</Heading>
      <Flex justify='center' mt='30px'>
        <WalletListTable />
      </Flex>
      <Box mt='24px'>
        <WalletAccordionGroup children='discord nanashi' />
      </Box>
      <DrawerExample />
      <Box mt={24}>
        <TagFilter />
      </Box>
    </Box>
  )
}
