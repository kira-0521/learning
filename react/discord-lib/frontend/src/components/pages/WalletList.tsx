import { FC, useEffect, useState, useCallback } from 'react'
import { Box, useDisclosure, Button, Slide } from '@chakra-ui/react'

import { DrawerExample } from '../molecules/DrawerExample'
import { TokenTable } from '../organisms/Layouts/TokenTable'
import { TabsList } from '../molecules/TabsList'
import { ActivityTable } from '../organisms/Layouts/ActivityTable'
import {
  ACTIVITY_DATA,
  ActivityData,
} from '../../scripts/componentsData/activityTableData'
import { PAGE } from '../../scripts/const'

export const WalletList: FC = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [activityData, setActivityData] = useState<ActivityData[]>([])
  const [hasMoreLoad, setHasMoreLoad] = useState(true)

  const { isOpen, onClose, onOpen } = useDisclosure()

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
          if (isMounted) {
            setData(data)
            setActivityData(ACTIVITY_DATA())
          }
        })
        .catch((err) => console.log(err))
    }

    fetchData()
    return () => {
      isMounted = false
    }
  }, [])

  const scrollFetchActivityData = useCallback(
    (page: number) => {
      if (PAGE < page) {
        setHasMoreLoad(false)
        return
      }
      new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          setActivityData([...activityData, ...ACTIVITY_DATA(page)])
          resolve()
        }, 2000)
      }).then(() => console.log('activityData', activityData))
    },
    [activityData]
  )

  const wrappedNode = {
    titles: ['Token', 'Activity'],
    contents: [
      <TokenTable />,
      <ActivityTable
        viewList={activityData}
        loadMoreFetch={(page: number) => {
          scrollFetchActivityData(page)
        }}
        hasMoreLoad={hasMoreLoad}
      />,
    ],
  }

  return (
    <Box w='100%'>
      <Button onClick={onOpen}>開閉</Button>
      {/* chakra */}
      {/* <Slide direction='right' in={isOpen} style={{ zIndex: 10 }}> */}
      {/* <DrawerExample onClose={onClose}>
        <TabsList tabList={wrappedNode} />
      </DrawerExample> */}
      {/* </Slide> */}

      {/* 自前 */}
      {!!isOpen && (
        <DrawerExample onClose={onClose}>
          <TabsList tabList={wrappedNode} />
        </DrawerExample>
      )}
    </Box>
  )
}
