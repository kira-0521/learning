import { FC, useEffect, useState } from 'react'
import { Heading, Box, Flex, useDisclosure, Button } from '@chakra-ui/react'

import { WalletListTable } from '../organisms/Layouts/WalletListTable'
import { WalletAccordionGroup } from '../organisms/Accordions/WalltAccordionGroup'
import { DrawerExample } from '../molecules/DrawerExample'
import { TagFilter } from '../organisms/TagFilter'
import { CheckboxGroup } from '../organisms/Forms/CheckboxGroup'
import { PankuzuList } from '../atoms/Layouts/PankuzuList'
import { TableList } from '../organisms/Layouts/TableLIst'
import { TokenTable } from '../organisms/Layouts/TokenTable'
import { TabsList } from '../molecules/TabsList'
import { ActivityTable } from '../organisms/Layouts/ActivityTable'

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
    contents: [<TokenTable />, <ActivityTable />],
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
