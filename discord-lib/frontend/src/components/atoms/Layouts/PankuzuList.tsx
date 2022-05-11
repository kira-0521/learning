import { FC, memo, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'

type Props = {
  pageName: string
}

export const PankuzuList: FC<Props> = memo(({ pageName }) => {
  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => console.log('data', data[0]))
        .catch((err) => console.log(err))
    }
    fetchData()

    return () => {
      fetchData()
    }
  }, [])
  return (
    <Box>
      <Text>Wallet App {pageName}</Text>
    </Box>
  )
})
