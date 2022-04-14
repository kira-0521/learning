import { FC } from 'react'
import { Heading, Stack, Flex } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'

import { TextInput } from '../atoms/Forms/TextInput'
import { LeftIconInInput } from '../atoms/Forms/LeftIconInInput'

export const WatchList: FC = () => {
  return (
    <Stack>
      <Heading>WatchList</Heading>
      <Flex>
        <TextInput variant='filled' />
        <LeftIconInInput children={<BiSearch />} />
      </Flex>
    </Stack>
  )
}
