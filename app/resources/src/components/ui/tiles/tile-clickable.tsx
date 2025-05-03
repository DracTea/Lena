import './tile-clickable.scss';
import { createElement } from 'react';

type Props = {
  text: string;
  href: string;
  icon?: any;
  onClick?: () => void;
};

function TileClickable({ text, href, icon, onClick }: Props) {


  return (
    <a href={href} className="ath-tile-clickable" onClick={onClick}>
      {icon ? createElement(icon, { className: 'tile-clickable__icon', size: 18 }) : null}
      <span className='tile-clickable__text'>{text}</span>
    </a>
  );
}

export default TileClickable;