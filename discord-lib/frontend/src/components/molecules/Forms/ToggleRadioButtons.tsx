import { FC, ReactNode } from 'react'
import { Box, useRadio, UseRadioProps } from '@chakra-ui/react'

type Props = {
  children: ReactNode
} & UseRadioProps

export const ToggleRadioButtons: FC<Props> = (props: Props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        borderRadius='sm'
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        px={8}
        py={2}>
        {props.children}
      </Box>
    </Box>
  )
}
