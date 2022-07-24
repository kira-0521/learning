import { FC, useEffect, useState } from 'react'
import { Heading, Stack, Flex } from '@chakra-ui/react'

import { EmotionTest } from '../molecules/EmotionTest'

export const WatchList: FC = () => {
  return (
    <Stack>
      <Heading>WatchList</Heading>
      <Flex>
        <EmotionTest />
      </Flex>
    </Stack>
  )
}
