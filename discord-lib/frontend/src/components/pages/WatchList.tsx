import { FC, useEffect } from 'react'
import { Heading, Stack, Flex } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'

import { TextInput } from '../atoms/Forms/TextInput'
import { LeftIconInInput } from '../atoms/Forms/LeftIconInInput'

export const WatchList: FC = () => {
  const location = useLocation()

  useEffect(() => {
    console.log('mount watch')

    return () => {
      console.log('unmount watch')
    }
  }, [])
  return (
    <Stack>
      <Heading>WatchList</Heading>
      <Flex>
        {/* <TextInput variant='filled' /> */}
        {/* <LeftIconInInput children={<BiSearch />} /> */}
      </Flex>
    </Stack>
  )
}
