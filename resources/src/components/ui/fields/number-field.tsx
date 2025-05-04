import './number-field.scss';
import { useEffect, useId } from "react";
import { Add, Subtract } from '@/components/ui/icons';

type Props = {
  label?: string;
  name: string;
  value: string;
  negative?: boolean;
  onChange: (name: string, value: string) => void;
  placeholder?: string
};

function NumberField({ label, name, value, negative = false, placeholder, onChange }: Props) {
  const id = useId();

  function ch(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    onChange(name, value);
  }

  function onInc() {
    const currentValue = parseInt(value, 10) || 0;
    const newValue = currentValue + 1;
    onChange(name, newValue.toString());
  }

  function onDec() {
    const currentValue = parseInt(value, 10) || 0;
    const newValue = !negative ? Math.max(currentValue - 1, 0) : currentValue - 1; // Decrement value
    onChange(name, newValue.toString());
  }

  useEffect(() => {
    if (!negative && parseInt(value, 10) < 0) onChange(name, '0');
  }, [value]);

  return (
    <div className="ath-number-field ath-field">
      {label && (
        <div className="ath-field__label-wrapper">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="ath-field__wrapper">
        <input id={id} type="text" {...{ name, value, placeholder }} onChange={ch} />
        <div className="btn-group">
          <button type='button' onClick={onDec}>
            <Subtract />
          </button>
          <span></span>
          <button type='button' onClick={onInc}>
            <Add />
          </button>
        </div>
      </div >
    </div >
  );
}

export default NumberField;