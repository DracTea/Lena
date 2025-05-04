import { Text, Tile } from "@/components/ui";

export default function GeneralTab() {
  return (
    <section id="general" className="container md">
      <div className="tab-general-tab pb-4">
        <Text as="h2" fontWeight="medium" variant="headingMd" text="General" />
      </div>
      <Tile className="container">
        <Text as="p" type="secondary" variant="bodyMd" text="This is the general settings page." />
      </Tile>
    </section>
  )
}