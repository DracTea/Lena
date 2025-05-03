import './password-field.scss';
import { Transition } from '@headlessui/react';
import { View, ViewOff } from '@carbon/icons-react';
import { useId, useState } from "react";

type Props = {
  label?: string;
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  placeholder?: string;
  className?: string;
};

function PasswordField({ label, name, value, onChange, className = '' }: Props) {
  const [show, setShow] = useState(false);
  const id = useId();

  function ch(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    onChange(value, name);
  }

  function ck() {
    setShow(!show);
  }

  return (
    <div className={`ath-password-field ath-field ${className}`}>
      {label && (
        <div className="ath-field__label-wrapper">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className="ath-field__wrapper">
        <input id={id} type={show ? 'text' : 'password'} {...{ name, value }} onChange={ch} />
        <button type='button' onClick={ck} aria-label={show ? "Hide password" : "Show password"}
          className="ath-password-field__toggle">
          <div className="ath-password-field__icon-container">
            <Transition
              show={show}
              enter="transition-opacity"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ViewOff className="ath-password-field__icon" size={16} />
            </Transition>

            <Transition
              show={!show}
              enter="transition-opacity"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <View className="ath-password-field__icon" size={16} />
            </Transition>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PasswordField;