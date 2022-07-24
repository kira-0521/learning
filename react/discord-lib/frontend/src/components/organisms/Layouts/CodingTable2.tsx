import React, { FC, useEffect } from 'react'
import { map } from 'lodash'
import { Box } from '@chakra-ui/react'

import { getStickyLeft } from '../../../scripts/utils/dom'

import {
  TopData,
  TOP_COLUMN,
} from '../../../scripts/componentsData/walletTopData'

type Props = {
  dataList: TopData[]
}

export const CodingTable2: FC<Props> = ({ dataList }) => {
  return <div>test</div>
}
