import { FC } from 'react'
import { Heading, Box, useRadioGroup, HStack } from '@chakra-ui/react'
import { ToggleRadioButtons } from '../molecules/Forms/ToggleRadioButtons'

export const WalletAlert: FC = () => {
  const options = ['ETH', 'DOll']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'money',
    defaultValue: 'ETH',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <Box>
      <Heading>WalletAlert</Heading>
      <HStack {...group} spacing='0'>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <ToggleRadioButtons key={value} {...radio}>
              {value}
            </ToggleRadioButtons>
          )
        })}
      </HStack>
    </Box>
  )
}
