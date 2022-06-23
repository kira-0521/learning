import { chakra, useCheckbox, Text, UseCheckboxProps } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & UseCheckboxProps

export const CustomCheckbox: FC<Props> = (props: Props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props)

  return (
    <chakra.label
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='flex-start'
      w='96px'
      h='48px'
      pl='8px'
      rounded='4px'
      cursor='pointer'
      bg={state.isChecked ? '#0f5999' : '#fff'}
      color='#000'
      _hover={state.isChecked ? { bg: '#87accc' } : { bg: '#828b93' }}
      {...htmlProps}
      {...getCheckboxProps()}>
      <input {...getInputProps()} hidden />
      <Text {...getLabelProps()}>{props.children}</Text>
    </chakra.label>
  )
}
