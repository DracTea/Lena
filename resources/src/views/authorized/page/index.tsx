import { Header } from '@/sora/common';

const breadcrumbs = [
  { label: 'Home', href: '/apanel' },
  { label: 'Pages', href: '/apanel/page', current: true },
];

export default function View() {

  return (
    <main className="view">
      <Header breadcrumbs={breadcrumbs} />
      <div className="container-padding">
      <h1>pages</h1>
      </div>
    </main>
  )
}

