import './search-field.scss';
import { useId } from "react";
import { Search } from "@carbon/icons-react";

type Props = {
  label?: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string
};

function SearchField({ label, name, value, placeholder, onChange }: Props) {
  const id = useId();

  function ch(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    onChange(name, value);
  }

  return (
    <div className="ath-search-field ath-field">
      {label && (
        <div className="ath-field__label-wrapper">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="ath-field__wrapper">
        <Search width={16} className="ath-field__search-icon" />
        <input id={id} type="text" {...{ name, value, placeholder }} onChange={ch} />
        <span className="ath-field__line"></span>
      </div>
    </div>
  );
}

export default SearchField;