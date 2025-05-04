import { Header } from "@/components/ui/shell";
import { DataTable, Text, Button, Drawer } from "@/components/ui";
import { EmailField, TextField, TiptapField } from "@/components/ui/fields";
import { useState } from "react";
import { t, getValue } from "@/globals";
import { Add, Close } from '@/components/ui/icons';
import scheme from '@/globals/schemes/mail';



export default function View() {
  const breadcrumbs = [
    { label: 'Home', href: '/apanel' },
    { label: "Mails", href: '/#', current: true },
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

  return (
    <>
      <Header breadcrumbs={breadcrumbs} actions={<MailDrawer />} />
      <main id="view" className="view-padding padding-block">
        <section className="container">
          <DataTable scheme={scheme} items={items} />
        </section>
      </main>
    </>
  )
}


function MailDrawer() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({});
  function ac() {
    setOpen(true);
  }

  function cl() {
    setOpen(false);
  }

  function getVal(name: string) {
    return getValue(values, name, "");
  }

  function handleChange(value: any, name: string) {
    setValues({ ...values, [name]: value });
  }

  return (
    <>
      <Button size="md" text={t(`New ${scheme.singular}`)} icon={Add} onClick={ac} />
      <Drawer arialabel="New Client" open={open}>
        <div className="ath-drawer__header">
          <Text fontWeight="bold" text={`New ${scheme.singular}`} />
          <div className="ath-drawer__header-actions">
            <Button size="md" text="Cancel" variant="secondary" onClick={cl} icon={Close} />
            <Button size="md" text="Confirm" onClick={cl} icon={Add} />
          </div>
        </div>
        <div className="ath-drawer__body">
          <div className="container md">
            <div className="container-grid">
              <EmailField label="To" name="to" className="grid-cols-6" value={getVal("to")} onChange={handleChange} />
              <EmailField label="From" name="from" className="grid-cols-6" value={getVal("from")} onChange={handleChange} />
            </div>
            <TextField label="Subject" name="subject" value={getVal("subject")} onChange={handleChange} />
            <TiptapField label="Body" name="body" value={getVal("body")} onChange={handleChange} />
          </div>
        </div>
      </Drawer>
    </>
  )
}
