import { FC, memo, ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import _ from 'lodash'

type Props = {
  children: ReactNode
}
export const MainLayout: FC<Props> = memo(({ children }) => {
  return (
    <Box p='40px'>
      <Flex direction='column'>{children}</Flex>
    </Box>
  )
})
