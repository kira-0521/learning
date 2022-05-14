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
    <Tabs>
      <TabList>
        {map(tabList.titles, (title) => (
          <Tab
            _focus={{ boxShadow: 'none' }}
            _selected={{ color: 'white', bg: 'blue.500' }}>
            {title}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {map(tabList.contents, (content) => (
          <TabPanel>{content}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
