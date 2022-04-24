import { FC, memo, ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import _ from 'lodash'
import { useLocation } from 'react-router-dom'

import { homeRoutes, RouteType } from '../../../routes/homeRoutes'
import { PankuzuList } from '../../atoms/Layouts/PankuzuList'

type Props = {
  children: ReactNode
}
export const MainLayout: FC<Props> = memo(({ children }) => {
  const location = useLocation()
  return (
    <Box p='40px'>
      {/* <PankuzuList
        pageName={
          _.find(
            homeRoutes,
            (route: RouteType) => location.pathname === route.path
          )!.name
        }
      /> */}
      <Flex maxW='1280px' direction='column'>
        {children}
      </Flex>
    </Box>
  )
})
