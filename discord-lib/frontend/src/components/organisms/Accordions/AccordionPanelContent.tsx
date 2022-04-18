import { FC } from 'react'
import {
  Flex,
  Box,
  Text,
  Checkbox,
  CheckboxGroup,
  HStack,
  Button,
} from '@chakra-ui/react'
import { BiTrash } from 'react-icons/bi'

type Props = {
  address: string
}

export const AccordionPanelContent: FC<Props> = (props: Props) => {
  const { address } = props
  return (
    <Flex
      justify='space-between'
      alignItems='center'
      py='12px'
      borderBottom='1px solid #080808'>
      <Box>
        <Text>{address}</Text>
      </Box>
      <Flex gap='12px'>
        <CheckboxGroup colorScheme='blue'>
          <Checkbox value='all' borderRight='1px solid #000' pr={4}>
            All
          </Checkbox>
          <HStack spacing='24px'>
            <Checkbox value='naruto'>Naruto</Checkbox>
            <Checkbox value='sasuke'>Sasuke</Checkbox>
            <Checkbox value='kakashi'>kakashi</Checkbox>
          </HStack>
        </CheckboxGroup>
        <Button bg='transparent'>
          <BiTrash />
        </Button>
      </Flex>
    </Flex>
  )
}
