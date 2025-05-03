import './toggle-field.scss';
import { useId } from "react";
import { Switch } from '@headlessui/react'

type Props = {
  label?: string;
  name: string;
  value: string;
  input?: boolean;
  onChange: (name: string, value: string) => void;
};

function ToggleField({ label, name, value, input = false, onChange }: Props) {
  const id = useId();

  function ch(value: boolean) {
    onChange(name, value ? '0' : '1');
  }

  return (
    <div className={`ath-toggle-field ath-field ${input ? 'ath-field--input' : ''}`}>
      {label && (
        <div className="ath-field__label-wrapper">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="ath-field__wrapper">
        <Switch
          name={name}
          id={id}
          checked={value === '0'}
          onChange={ch}
          className="ath-field__toggle"
        >
          <span className="ath-field__toggle-dot" />
        </Switch>
      </div>
    </div>
  );
}

export default ToggleField;