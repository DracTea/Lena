import { Text, Tile, Acf, Button } from "@/components/ui";
import { Add } from '@/components/ui/icons';
import { useState } from "react";

const fields = [
  { type: 'text', label: 'Title', name: 'title', def: '', className: 'ath-field__grid-4' },
  { type: 'text', label: 'Description', name: 'description', def: '', className: 'ath-field__grid-4' },
  { type: 'media', label: 'Image', name: 'image', def: '', className: 'ath-field__grid-4' },
]

export default function SeoTab() {
  const [values, setValue] = useState({ email: '', password: '' });

  function ch(value: any, name: string) {
    setValue((prev: any) => ({ ...prev, [name]: value }));
  }

  return (
    <section id="seo" className="container md">
      <div className="tab-general-tab pb-4">
        <Text as="h2" fontWeight="medium" variant="headingMd" text="Account" />
      </div>
      <Tile>
        <Text as="p" type="secondary" variant="bodyMd" text="Global account settings" />
        <Acf fields={fields} values={values} setValue={ch} />
        <div className="pt-4">
          <Button onClick={() => { }} text="Save" icon={Add} />
        </div>
      </Tile>
    </section>
  )
}