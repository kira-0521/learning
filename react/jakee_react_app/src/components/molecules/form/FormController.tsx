import { memo, VFC, ReactNode } from 'react'
import { FormControl, FormLabel } from '@chakra-ui/react'

type Props = {
  children: ReactNode
  htmlFor?: string
  labelText?: string | number
}

export const FormController: VFC<Props> = memo((props) => {
  const { children, htmlFor, labelText } = props

  return (
    <FormControl>
      <FormLabel htmlFor={htmlFor} cursor='pointer'>
        {labelText}
      </FormLabel>
      {children}
    </FormControl>
  )
})
