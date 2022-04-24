import { FC } from 'react'
import { Heading, Box, useRadioGroup, HStack } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

import { ToggleRadioButtons } from '../organisms/Forms/ToggleRadioButtons'

export const WalletAlert: FC = () => {
  const location = useLocation()
  console.log('location', location)

  return (
    <Box>
      <Heading>WalletAlert</Heading>
      <ToggleRadioButtons />
    </Box>
  )
}
