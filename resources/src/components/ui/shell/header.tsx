import './header.scss';
import { useState } from 'react';
import { Button, useRouter } from '@/components/ui';
import { OpenPanelLeft, OpenPanelFilledLeft, Search } from '@/components/ui/icons';

type Props = {
  breadcrumbs?: { label: string; href: string; current?: boolean }[];
  actions?: React.ReactNode;
}

function Header({ breadcrumbs = [], actions }: Props) {
  const router = useRouter()
  const [toggle, setToggle] = useState(false);

  function nv(e: any) {
    e.preventDefault();
    router.navigate(e.currentTarget.href);
  }


  return (
    <header className="ath-header">
      <div className="ath-header__wrapper">
        <div className='ath-header__left'>
          <div className="ath-header__left-btn">
            <div className="ath-btn-group">
              <Button onClick={() => setToggle((prev) => !prev)} variant="ghost" hasIconOnly icon={toggle ? OpenPanelFilledLeft : OpenPanelLeft} />
            </div>
            <div className="ath-btn-group">
              <Button onClick={() => setToggle((prev) => !prev)} variant="ghost" hasIconOnly icon={Search} />
            </div>
          </div>
          <div className='ath-header__breadcrumb'>
            {breadcrumbs.map((item, index) => (
              <div key={index} className={`ath-header__breadcrumb-item ${item.current ? 'ath-header__breadcrumb-item--current' : ''}`}>
                <a onClick={nv} href={item.href} className={item.current ? 'ath-header__current' : ''}>{item.label}</a>
                {index < breadcrumbs.length - 1 && <span className="ath-header__breadcrumb-separator">/</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="ath-header__right">
          {actions}
        </div>
      </div>
    </header>
  )
}


export default Header;