import React, { useEffect, useState, FC } from 'react'
import { map, isNil } from 'lodash'
import { Box, Spinner } from '@chakra-ui/react'

import { ActivityData } from '../../../scripts/componentsData/activityTableData'
import { getDomHight } from '../../../scripts/utils/dom'
import { DRAWER_STYLE_FOR_SUBTRACTION } from '../../../scripts/const'

type Props = {
  viewList: ActivityData[]
  loadMoreFetch: (page: number) => void
  hasMoreLoad: boolean
}

export const ActivityTable: FC<Props> = ({
  viewList,
  loadMoreFetch,
  hasMoreLoad,
}) => {
  const [scrollDomHeight, setScrollDomHeight] = useState(0)

  useEffect(() => {
    let isMounted = true
    const domHeight = getDomHight(
      ['drawer-header', 'tab-list'],
      DRAWER_STYLE_FOR_SUBTRACTION
    )

    if (isMounted) {
      !isNil(domHeight) && setScrollDomHeight(domHeight)
    }

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Box overflowY='scroll' height={`${scrollDomHeight}px`}>
      test
    </Box>
  )
}
