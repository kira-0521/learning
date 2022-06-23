import { FC, memo } from 'react'
import { Checkbox, CheckboxProps } from '@chakra-ui/react'

export const PrimaryCheckbox: FC<CheckboxProps> = memo(
  (props: CheckboxProps) => {
    const { checked, onChange, value } = props

    return (
      <Checkbox
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
        bg='#c0c0c0'
        css={`
          > span:first-of-type {
            box-shadow: unset;
            border: none;
          }
        `}
      />
    )
  }
)
