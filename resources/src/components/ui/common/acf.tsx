import fieldsEls from '../fields';
import { getValue } from '@/globals/utils';

type Props = {
  fields: any[];
  values: { [k: string]: any };
  setValue: (value: any, name: string) => void;
}

function NotFound({ type }: { type: string }) {
  return (
    <div className="ath-field__not-found">
      <p>Field type <strong>{type}</strong> not found.</p>
    </div>
  )
}

export default function Acf({ fields, values, setValue }: Props) {
  function vl(field: any) {
    return getValue(values, field.name, field.def);
  }

  function ch(value: any, name: string) {
    setValue(value, name);
  }

  return (
    <fieldset className="ath-acf">
      {fields.map((field, index) => {
        const Field = fieldsEls[field.type] || NotFound;
        return (<Field key={index} {...field} value={vl(field)} onChange={ch} />)
      })}
    </fieldset>
  )
}