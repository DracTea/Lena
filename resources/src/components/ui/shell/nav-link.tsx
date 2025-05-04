import './nav-link.scss';
import { createElement, type ReactNode } from "react";
import type { CarbonIconType } from '@/components/ui/icons';
import clsx from 'clsx';

type Props = {
  href: string;
  active?: boolean;
  label?: string;
  text?: string;
  icon?: ReactNode | CarbonIconType;
  hasIconOnly?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function NavLink({ href, text, icon, label, onClick, active = false, hasIconOnly = false }: Props) {
  const cx = clsx('ath-nav-link', {
    'ath-nav-link__icononly': hasIconOnly,
    'ath-nav-link__active': active,
  });

  return (
    <a href={href} onClick={onClick} className={cx} aria-label={label}>
      {icon && <span className="ath-nav-link__icon">{createElement(icon as any, { className: 'ath-button__icon', size: 18 })}</span>}
      <span className="ath-nav-link__text">{text}</span>
    </a>
  )

}

export default NavLink



