import { FC, useEffect, useState } from 'react'
import { Heading, Stack, Flex } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'

import { TextInput } from '../atoms/Forms/TextInput'
import { LeftIconInInput } from '../atoms/Forms/LeftIconInInput'
import { CodingTable1 } from '../organisms/Layouts/CodingTable1'
import { TOP_DATA, TopData } from '../../scripts/componentsData/walletTopData'

export const WatchList: FC = () => {
  const location = useLocation()
  const [response, setResponse] = useState<TopData[]>([])

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      setResponse(TOP_DATA())
    }
  }, [])

  return (
    <Stack>
      <Heading>WatchList</Heading>
      <Flex>
        <CodingTable1 topDataList={response} />
      </Flex>
    </Stack>
  )
}
