import { useState } from 'react';
import { Button } from '../buttons';
import { ArrowRight } from '@carbon/icons-react';
import Acf from './acf';

type Props = {
  fields: any[];
  submitText: string;
  submit: (values: any) => Promise<void>;
}

export default function Form({ fields, submitText, submit }: Props) {
  const [values, setValue] = useState({});

  function ch(value: any, name: string) {
    setValue((prev: any) => ({ ...prev, [name]: value }));
  }

  async function sb(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submit(values);
  }

  return (
    <div className="ath-form">
      <form onSubmit={sb}>
        <fieldset>
          <Acf fields={fields} values={values} setValue={ch} />
        </fieldset>
        <div className="btn-group">
          <Button type="submit" text={submitText} icon={ArrowRight} />
        </div>
      </form>
    </div>
  )
}
