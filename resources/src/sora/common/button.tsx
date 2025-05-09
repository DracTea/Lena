import './button.scss';
import { Button as ButtonBase } from '@headlessui/react'
import { createElement } from 'react';
import clsx from 'clsx';

type Props = {
  text?: string;
  label?: string;
  disabled?: boolean;
  icon?: any;
  hasIconOnly?: boolean;
  asLink?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  size?: 'xl' | 'lg' | 'md' | 'sm';
  variant?: 'default' | 'danger' | 'ghost' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
}

function Button({ label, icon, text, size = 'md', type = 'button', variant = 'default', asLink = false, href = '', disabled = false, hasIconOnly = false, onClick }: Props) {

  const cx = clsx('ath-button', {
    [`ath-button--${variant}`]: variant,
    [`ath-button--size-${size}`]: size,
    'ath-button__icon-only': hasIconOnly,
  });

  if (asLink) {
    return (
      <a href={href} className={cx} aria-label={label} onClick={onClick}>
        {icon ? createElement(icon, { className: 'ath-button__icon', size: 24 }) : null}
        {text ? <span className="ath-button__text">{text}</span> : null}
      </a>
    )
  }

  return (
    <ButtonBase className={cx} aria-label={label} type={type} disabled={disabled} onClick={onClick}>
      {icon ? createElement(icon, { className: 'ath-button__icon', size: 24 }) : null}
      {text ? <span className="ath-button__text">{text}</span> : null}
    </ButtonBase>
  )
}

export default Button