import { FC, memo, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

import { CheckboxGroup } from './Forms/CheckboxGroup'

type Props = { children?: ReactNode }

export const TagFilter: FC<Props> = memo((props: Props) => {
  const { children } = props
  return (
    <Box>
      <CheckboxGroup />
    </Box>
  )
})
