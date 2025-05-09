import { Header,Tile } from '@/sora/common';

const breadcrumbs = [
  { label: 'Home', href: '/apanel', current: true },
];

export default function View() {

  return (
    <main className="view">
      <Header breadcrumbs={breadcrumbs} />
      <div className="container-md container-dashboard">
        <div className="container-flex-col">
        <Tile fullWidth>
          <h1>Map</h1>
        </Tile>
          <div>
            <img src="/assets/map.png" alt="Map" />
          </div>
        </div>
        <div className="container-flex-col">
          <Tile fullWidth>
            <h1>Action</h1>
          </Tile>
          <Tile fullWidth>
            <h1>Quests</h1>
          </Tile>
        </div>
        <Tile fullWidth>
          <h1>Profile</h1>
        </Tile>
      </div>
    </main>
  )
}

