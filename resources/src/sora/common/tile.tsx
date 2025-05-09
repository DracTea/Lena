import './tile.scss';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  ghost?: boolean;
  className?: string;
  fullWidth?: boolean;
};


function Tile({ children, className, ghost, fullWidth = false }: Props) {
  const cx = clsx('sora-tile', className ?? '', {
    'sora-til__ghost': ghost,
    'sora-tile__full': fullWidth,
  });

  return (
    <div className={cx}>
      {children}
    </div>
  )
}


export default Tile;