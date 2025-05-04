import './tile-code.scss';
import clsx from 'clsx';
import { useRef } from 'react';
import { Button } from '../buttons';
import { Copy } from '@/components/ui/icons';

type Props = {
  children: React.ReactNode;
  ghost?: boolean;
  className?: string;
};


function Tile({ children, className, ghost }: Props) {
  const el = useRef<HTMLPreElement>(null);
  const cx = clsx('ath-tile-code', className ?? '', {
    'ath-tile--ghost': ghost,
  });

  function cl() {
    //copy to clipboard
    if (!el.current) return;
    navigator.clipboard.writeText(el.current.innerText)
  }

  return (
    <div className={cx}>
      <div className='ath-tile-code__button'>
        <Button variant="secondary" onClick={cl} size="sm" icon={Copy} hasIconOnly />
      </div>
      <div className="ath-tile-code__content">
        <pre>
          <code ref={el}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  )
}


export default Tile;