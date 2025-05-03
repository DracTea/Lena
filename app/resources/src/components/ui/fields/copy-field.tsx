import { Copy } from '@carbon/icons-react';
import './copy-field.scss';
import { useId } from "react";

type Props = {
  label?: string;
  value: string;
};

function CopyField({ label, value }: Props) {
  const id = useId();

  function cl() {
    navigator.clipboard.writeText(value).then(() => {
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  }

  return (
    <div className="ath-copy-field ath-field">
      {label && (
        <div className="ath-field__label-wrapper">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="ath-field__wrapper">
        <input id={id} type="text" value={value} disabled />
        <button onClick={cl}><Copy /></button>
      </div>
    </div>
  );
}

export default CopyField;