import { useCheckboxGroup, Text, Stack } from '@chakra-ui/react'
import { CustomCheckbox } from '../../atoms/Forms/CustomCheckbox'

export const CheckboxGroup = () => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  })

  console.log(value)

  return (
    <Stack>
      <Text>The selected checkboxes are: {value.sort().join(' and ')}</Text>
      <CustomCheckbox {...getCheckboxProps({ value: '1' })}>a</CustomCheckbox>
      <CustomCheckbox {...getCheckboxProps({ value: '2' })}>b</CustomCheckbox>
      <CustomCheckbox {...getCheckboxProps({ value: '3' })}>c</CustomCheckbox>
    </Stack>
  )
}
