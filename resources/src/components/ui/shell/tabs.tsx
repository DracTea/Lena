import './tabs.scss';
import { Tab, TabGroup, TabList, TabPanel as TabP, TabPanels } from '@headlessui/react'


type TabsProps = {
  children: React.ReactNode;
  tabs: string[];
}

function Tabs({ children, tabs }: TabsProps) {

  return (
    <TabGroup className={"ath-tabs"}>
      <TabList className={"ath-tabs__list"}>
        {tabs.map((tab, index) => <Tab className={'ath-tabs__button'} key={index}>{tab}</Tab>)}
      </TabList>
      <TabPanels>
        {children}
      </TabPanels>
    </TabGroup>
  )
}


type TabPanelProps = {
  children: React.ReactNode;
}


function TabPanel({ children }: TabPanelProps) {

  return (
    <TabP>
      {children}
    </TabP>
  )
}

export { Tabs, TabPanel };