import React from 'react'
import { Grid, Box } from '@chakra-ui/react'

import { CodingTable2 } from '../organisms/Layouts/CodingTable2'
import { TOP_DATA } from '../../scripts/componentsData/walletTopData'

export const TableTest = () => {
  return (
    <Grid templateColumns='300px 1fr' w='100%'>
      <Box height='300px'>固定要素</Box>
      <CodingTable2 dataList={TOP_DATA()} />
    </Grid>
  )
}
