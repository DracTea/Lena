import '@/styles/views/dashboard.scss';
import { Header } from "@/components/ui/shell";
import { PlaceholderPattern } from "@/components/ui/common";

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Leads', href: '/lead', current: true },
];

function View() {


  return (
    <>
      <Header breadcrumbs={breadcrumbs} />
      <main id="view" className="view-padding padding-block">
        <div className="views-dashboard">
          <div className="grid">
            <div className="tile">
              <PlaceholderPattern />
            </div>
            <div className="tile">
              <PlaceholderPattern />
            </div>
            <div className="tile">
              <PlaceholderPattern />
            </div>
          </div>
          <div className="tile">
            <PlaceholderPattern />
          </div>
        </div>
      </main>
    </>
  )
}

export default View
