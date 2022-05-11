import { FC, useEffect, useState } from 'react'
import { Heading, Box, Flex } from '@chakra-ui/react'

import { WalletListTable } from '../organisms/Layouts/WalletListTable'
import { WalletAccordionGroup } from '../organisms/Accordions/WalltAccordionGroup'
import { DrawerExample } from '../molecules/Drawer'
import { TagFilter } from '../organisms/TagFilter'
import { CheckboxGroup } from '../organisms/Forms/CheckboxGroup'
import { PankuzuList } from '../atoms/Layouts/PankuzuList'

export const WalletList: FC = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data)
  //         console.log(data[0])
  //       })
  //       .catch((err) => console.log(err))
  //   }
  //   const timer = setInterval(fetchData, 5000)

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

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

  return (
    <Box>
      <Heading>WalletListTable</Heading>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>カウント</button>
      <Flex justify='center' mt='30px' overflow='scroll' height='300px'>
        <WalletListTable />
      </Flex>
      <PankuzuList pageName='aa' />
      <Box mt='24px'>
        {/* <WalletAccordionGroup children='discord nanashi' /> */}
      </Box>
      {/* <DrawerExample /> */}
      <Box mt={24}>
        {/* <TagFilter>
          <CheckboxGroup />
        </TagFilter> */}
      </Box>
    </Box>
  )
}
