import { FC, memo } from 'react'
import { Box, Text } from '@chakra-ui/react'

type Props = {
  pageName: string
}

export const PankuzuList: FC<Props> = memo(({ pageName }) => {
  return (
    <Box>
      <Text>Wallet App {pageName}</Text>
    </Box>
  )
})
