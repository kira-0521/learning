import { FC, ReactNode, memo, useState, useCallback, useContext } from 'react'
import { MoneyUnitContext } from '../../../provider/MoneyUnitProvider'
import {
  Box,
  useRadio,
  UseRadioProps,
  useRadioGroup,
  HStack,
} from '@chakra-ui/react'

// 1. Create a component that consumes the `useRadio` hook
type RadioCardProps = {
  children: ReactNode
  useRadioProps: UseRadioProps
}
const RadioCard: FC<RadioCardProps> = (props) => {
  const { children, useRadioProps } = props
  const { getInputProps, getCheckboxProps } = useRadio(useRadioProps)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        cursor='pointer'
        borderWidth='1px'
        borderRadius='md'
        boxShadow='md'
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        px={5}
        py={1}>
        {children}
      </Box>
    </Box>
  )
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
type Unit = 'ETH' | 'USD'
export const ToggleRadioButtons: FC = memo(() => {
  const options = ['ETH', 'USD']
  const moneyUnitContext = useContext(MoneyUnitContext)
  const onChangeUnit = useCallback(
    (nextValue: Unit) => {
      console.log('nextValue', nextValue)
      moneyUnitContext.setUnit(nextValue)
    },
    [moneyUnitContext.unit]
  )

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'money',
    defaultValue: moneyUnitContext.unit,
    onChange: onChangeUnit,
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} useRadioProps={radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
})
