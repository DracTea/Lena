import './select-field.scss';
import { useId } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDown } from '@/components/ui/icons';


type Props = {
  label?: string;
  name: string;
  value: string;
  variant?: 'default' | 'inline';
  values: Array<{ id: number; name: string }>;
  onChange: (value: string, name: string) => void;
};

function SelectField({ label, name, value, values, onChange, variant = 'default' }: Props) {
  const id = useId();
  function ch(value: any) {
    onChange(value.id, name);
  }

  function curr(type: string | undefined = undefined) {
    const v = values.find(v => v.id === parseInt(value));
    if (type) return v?.[type];
    return v;
  }

  return (
    <div className={`ath-select-field ath-field ath-select-field__${variant}`}>
      {label && (
        <div className="ath-field__label-wrapper">
          <label className="ath-select-field__label" htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="ath-field__wrapper">
        <Listbox value={curr()} onChange={ch}>
          <ListboxButton className="ath-field__button" >
            <span>{curr() ? curr('name') : 'Select an option'}</span>
            <ChevronDown className="ath-field__icon" width={18} />
          </ListboxButton>
          <ListboxOptions anchor="bottom end" className={"ath-select-field__options"}>
            {values.map((v) => (
              <ListboxOption key={v.id} value={v} className="ath-select-field__option">
                <span className="ath-select-field__text">{v.name}</span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </div>
  );
}

export default SelectField;