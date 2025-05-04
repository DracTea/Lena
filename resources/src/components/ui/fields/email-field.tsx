import './email-field.scss';
import { useId } from "react";

type Props = {
  label?: string;
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  placeholder?: string;
  className?: string;
};

function EmailField({ label, name, value, placeholder, onChange, className = '' }: Props) {
  const id = useId();

  function ch(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    onChange(value, name);
  }

  return (
    <div className={`ath-email-field ath-field ${className}`}>
      {label && (
        <div className="ath-field__label-wrapper">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="ath-field__wrapper">
        <input id={id} type="email" {...{ name, value, placeholder }} onChange={ch} />
      </div>
    </div>
  );
}

export default EmailField;