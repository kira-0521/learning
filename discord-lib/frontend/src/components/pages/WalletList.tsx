import { FC, useEffect, useState } from 'react'
import { Box, useDisclosure, Button } from '@chakra-ui/react'

import { DrawerExample } from '../molecules/DrawerExample'
import { TokenTable } from '../organisms/Layouts/TokenTable'
import { TabsList } from '../molecules/TabsList'
import { ActivityTable } from '../organisms/Layouts/ActivityTable'
import { ACTIVITY_DATA } from '../../scripts/componentsData/activityTableData'

export const WalletList: FC = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const { isOpen, onClose, onOpen } = useDisclosure()

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
          if (isMounted) {
            setData(data)
          }
          console.log(data[0])
        })
        .catch((err) => console.log(err))
    }

    fetchData()
    return () => {
      isMounted = false
    }
  }, [])

  const wrappedNode = {
    titles: ['Token', 'Activity'],
    contents: [<TokenTable />, <ActivityTable viewList={ACTIVITY_DATA} />],
  }

  return (
    <Box w='100%'>
      <Button onClick={onOpen}>開閉</Button>
      {isOpen && (
        <DrawerExample onClose={onClose}>
          <TabsList tabList={wrappedNode} />
        </DrawerExample>
      )}
    </Box>
  )
}
