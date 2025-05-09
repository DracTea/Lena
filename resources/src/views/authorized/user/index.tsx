import { Header } from '@/sora/common';

const breadcrumbs = [
  { label: 'Home', href: '/apanel' },
  { label: 'Users', href: '/apanel/user', current: true },
];

export default function View() {

  return (
    <main className="view">
      <Header breadcrumbs={breadcrumbs} />
      <div className="container-padding">
        <h1>users</h1>
      </div>
    </main>
  )
}

