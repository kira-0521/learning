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
export const RadioCard: FC<RadioCardProps> = (props) => {
  const { children, useRadioProps } = props
  const { getInputProps, getCheckboxProps } = useRadio(useRadioProps)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        // 以下を展開することでチェックボックスのプロパティを扱える
        {...checkbox}
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
