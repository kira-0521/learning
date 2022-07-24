import { FC } from 'react'
import { Heading, Stack, Flex } from '@chakra-ui/react'

import { EmotionTest } from '../molecules/EmotionTest'
import { ReducerTest } from '../molecules/ReducerTest'
import { ReducerContextTest } from '../molecules/ReducerContextTest'

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
      <br />
      <br />
      <Flex>
        <h1 style={{ fontSize: '50px' }}>Toast Test</h1>
        <ReducerContextTest />
      </Flex>
    </Stack>
  )
}
