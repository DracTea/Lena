import { Header } from "@/components/ui/shell";
import { DataTable, Button, Sheet, useRouter } from "@/components/ui";
import { t } from "@/globals";
import { Add } from '@/components/ui/icons';
import { useState } from "react";
import scheme from '@/globals/schemes/client';



function View() {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const breadcrumbs = [
    { label: 'Home', href: '/apanel' },
    { label: "Clients", href: '/#', current: true },
  ];

  const items = {
    current_page: 1,
    total_pages: 1,
    last_page: 1,
    per_page: 10,
    total: 0,
    from: 1,
    to: 10,
    data: [],
  };

  function ac() {
    setOpen(true);
  }

  function cl() {
    setOpen(false);
  }

  return (
    <>
      <Header breadcrumbs={breadcrumbs} actions={<Button onClick={ac} size="md" text={t("New Client")} icon={Add} />} />
      <main id="view" className="view-padding padding-block">
        <section className="container">
          <DataTable scheme={scheme} items={items} />
        </section>
      </main>
      <Sheet arialabel="New Client" open={open} onClose={cl}>
        <div className="ath-sheet__content">
          <h1>New Client</h1>
        </div>
      </Sheet>
    </>
  )
}

export default View