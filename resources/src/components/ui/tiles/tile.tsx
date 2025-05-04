import clsx from 'clsx';
import './tile.scss';

type Props = {
  children: React.ReactNode;
  ghost?: boolean;
  className?: string;
};


function Tile({ children, className, ghost }: Props) {
  const cx = clsx('ath-tile', className ?? '', {
    'ath-tile--ghost': ghost,
  });

  return (
    <div className={cx}>
      {children}
    </div>
  )
}


export default Tile;