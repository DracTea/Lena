import { Button as ButtonBase } from '@headlessui/react'
import { createElement } from 'react';
import './button.scss';
import clsx from 'clsx';

type Props = {
  text?: string;
  label?: string;
  disabled?: boolean;
  icon?: any;
  hasIconOnly?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: 'xl' | 'lg' | 'md' | 'sm';
  variant?: 'default' | 'danger' | 'ghost' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
}

function Button({ label, icon, text, size = 'md', type = 'button', variant = 'default', disabled = false, hasIconOnly = false, onClick }: Props) {

  const cx = clsx('ath-button', {
    [`ath-button--${variant}`]: variant,
    [`ath-button--size-${size}`]: size,
    'ath-button__icon-only': hasIconOnly,
  });


  return (
    <ButtonBase className={cx} aria-label={label} type={type} disabled={disabled} onClick={onClick}>
      {icon ? createElement(icon, { className: 'ath-button__icon', size: 24 }) : null}
      {text ? <span className="ath-button__text">{text}</span> : null}
    </ButtonBase>
  )
}

export default Button