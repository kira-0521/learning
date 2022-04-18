import { FC } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Flex,
  Button,
} from '@chakra-ui/react'
import { BiTrash } from 'react-icons/bi'

import { AccordionPanelContent } from './AccordionPanelContent'

type Props = {
  children: string
}

export const WalletAccordionGroup: FC<Props> = (props: Props) => {
  const { children } = props

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem border='none'>
        <Heading>
          <AccordionButton
            _focus={{ outline: 'none', boxShadow: 'none' }}
            py='16px'
            border='1px solid #080808'
            borderX='none'>
            <Box flex='1' textAlign='left'>
              {children}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          <Flex justify='flex-end' py='6px'>
            <Button bg='transparent'>
              <BiTrash />
              All Delete
            </Button>
          </Flex>
          {[
            '0xfdaegd90vd87gf7vda0',
            '0xfdaegd90vd87gf7vda0',
            '0xfdaegd90vd87gf7vda0',
          ].map((item: string) => (
            <AccordionPanelContent address={item} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
