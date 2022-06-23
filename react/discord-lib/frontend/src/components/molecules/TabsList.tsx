import React, { FC, ReactNode } from 'react'
import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import { map } from 'lodash'

type Props = {
  tabList: {
    titles: string[]
    contents: ReactNode[]
  }
}

export const TabsList: FC<Props> = (props) => {
  const { tabList } = props
  return (
    <Tabs id='tabs'>
      <TabList id='tab-list'>
        {map(tabList.titles, (title, i) => (
          <Tab
            key={i}
            _focus={{ boxShadow: 'none' }}
            _selected={{ color: 'white', bg: 'blue.500' }}>
            {title}
          </Tab>
        ))}
      </TabList>

      <TabPanels id='tab-panels'>
        {map(tabList.contents, (content, i) => (
          <TabPanel key={i}>{content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
