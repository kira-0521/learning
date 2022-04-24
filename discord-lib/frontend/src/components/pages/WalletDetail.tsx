import { FC, useContext } from 'react'
import { Heading, Box, Text } from '@chakra-ui/react'
import { MoneyUnitContext } from '../../provider/MoneyUnitProvider'
import { ToggleRadioButtons } from '../molecules/Forms/ToggleRadioButtons'

export const WalletDetail: FC = () => {
  const moneyUnit = useContext(MoneyUnitContext)
  return (
    <Box>
      <Heading>WalletDetail</Heading>
      <Text>{moneyUnit.unit}</Text>
    </Box>
  )
}
