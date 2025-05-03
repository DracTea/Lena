import { Header } from "@/components/ui/shell";
import { Text, Tile, Button, useRouter } from "@/components/ui";

type Props = {
  title: string;
  user: any;
}

function View({ title,user }: Props) {
  const router = useRouter()

  const breadcrumbs = [
    { label: 'Home', href: '/apanel' },
    { label: title, href: '/#', current: true },
  ];

  async function lt() {
    router.navigate('/logout')
  }

  return (
    <>
      <Header breadcrumbs={breadcrumbs} actions={<Button onClick={lt} size="md" text="Logout" />} />
      <main id="view" className="view-padding padding-block">
        <div className="container sm">
          <Tile className="view-single">
            <Text as="p">User: {user.name}</Text>
          </Tile>
        </div>
      </main>
    </>
  )
}

export default View
