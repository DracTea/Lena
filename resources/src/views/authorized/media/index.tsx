import { Header } from '@/sora/common';

const breadcrumbs = [
  { label: 'Home', href: '/apanel' },
  { label: 'Media', href: '/apanel/media', current: true },
];

export default function View() {

  return (
    <main className="view">
      <Header breadcrumbs={breadcrumbs} />
      <div className="container-padding">
      <h1>media</h1>
      </div>
    </main>
  )
}

