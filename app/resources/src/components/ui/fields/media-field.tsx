import './media-field.scss';
import { useId } from 'react';

type Props = {
  label?: string;
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  className?: string;
}


export default function MediaField({ label, name, value, onChange, className = '' }: Props) {
  const id = useId();

  function ch(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    onChange(value, name);
  }

  return (
    <div className={`ath-media-field ath-field ${className}`}>
      {label && (
        <div className="ath-field__label-wrapper">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="ath-field__wrapper">
        <input id={id} type="text" name={name} value={value} onChange={ch} />
      </div>
    </div>
  )

}