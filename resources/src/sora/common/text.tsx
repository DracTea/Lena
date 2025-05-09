import { createElement } from "react";
import clsx from 'clsx';

type Props = {
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontWeight?: 'normal' | 'bold' | 'medium' | 'lighter';
  alignment?: 'left' | 'center' | 'right' | 'justify';
  type?: 'default' | 'secondary' | 'error' | 'success' | 'warning' | 'info';
  variant?: 'headingLg' | 'headingMd' | 'headingSm' | 'bodyLg' | 'bodyMd' | 'bodySm';
  className?: string;
  text?: string;
  truncate?: boolean;
  children?: React.ReactNode;
}

function Text({ text, children, as = 'p', fontWeight = 'normal', variant = 'bodyMd', type = 'default', alignment = 'left', className = '' }: Props) {

  const cx = clsx('ath-text',className,{
      [`ath-text-type--${type}`]: type,
      [`ath-text-variant--${variant}`]: variant,
      [`ath-text-align--${alignment}`]: alignment,
      [`ath-text-weight--${fontWeight}`]: fontWeight,
    },
  );

  return createElement(as,{className: cx}, text || children);
}

export default Text