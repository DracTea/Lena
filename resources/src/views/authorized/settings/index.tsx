import { Header } from '@/sora/common';

const breadcrumbs = [
  { label: 'Home', href: '/apanel' },
  { label: 'Settings', href: '/apanel/settings', current: true },
];

export default function View() {

  return (
    <main className="view">
      <Header breadcrumbs={breadcrumbs} />
      <div className="container-padding">
      <h1>Settings</h1>
      </div>
    </main>
  )
}

