import { FC, useContext, useEffect } from 'react'
import { Heading, Box, Text } from '@chakra-ui/react'
import { MoneyUnitContext } from '../../provider/MoneyUnitProvider'
import { ToggleRadioButtons } from '../organisms/Forms/ToggleRadioButtons'

export const WalletDetail: FC = () => {
  const moneyUnit = useContext(MoneyUnitContext)

  useEffect(() => {
    console.log('mount detail')

    return () => {
      console.log('unmount detail')
    }
  }, [])

  return (
    <Box>
      <Heading>WalletDetail</Heading>
      <Text>{moneyUnit.unit}</Text>
      <ToggleRadioButtons />
    </Box>
  )
}
