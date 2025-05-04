import { Header, Tabs, TabPanel } from "@/components/ui/shell";
import Account from "./account";
import General from "./general";

const breadcrumbs = [
  { label: 'Home', href: '/apanel' },
  { label: 'Settings', href: '/apanel/settings', current: true }
];

function View(props: any) {
  return (
    <>
      <Header breadcrumbs={breadcrumbs} />
      <main id="view">
        <Tabs tabs={['General', 'Account']}>
          <TabPanel>
            <General {...props} />
          </TabPanel>
          <TabPanel>
            <Account {...props} />
          </TabPanel>
        </Tabs>
      </main>
    </>
  )
}

export default View
