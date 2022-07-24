import { FC } from 'react'
import { Heading, Stack, Flex } from '@chakra-ui/react'

import { EmotionTest } from '../molecules/EmotionTest'
import { ReducerTest } from '../molecules/ReducerTest'

export const WatchList: FC = () => {
  return (
    <Stack>
      <Heading>WatchList</Heading>
      <Flex>
        <EmotionTest />
      </Flex>
      <Flex>
        <ReducerTest />
      </Flex>
    </Stack>
  )
}
