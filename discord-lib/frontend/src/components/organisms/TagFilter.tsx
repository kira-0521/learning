import { FC, memo, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type Props = { children: ReactNode }

export const TagFilter: FC<Props> = memo((props: Props) => {
  const { children } = props
  return <Box>{children}</Box>
})
