import { useState } from 'react';
import './aside.scss';
import NavLink from "./nav-link";
import { useRouter } from '../router';
import { Settings, Home, User, Enterprise, Email, CropGrowth,  Events,Chat, Roadmap } from "@carbon/icons-react";

function Aside() {
  const router = useRouter()
  const [url, setUrl] = useState<string>(document.location.pathname)

  function cl(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const ur = e.currentTarget.getAttribute('href') || '/';

    setUrl(ur);
    router.navigate(ur);
  }

  function act(aUrl: string) {
    return aUrl === url;
  }

  return (
    <aside className="ath-aside">
      <div className="wrapper">
        <div className="top">
          <a href="/apanel" onClick={cl}>
            <img src="/assets/logo.svg" />
          </a>
        </div>
        <div className="middle">
          <NavLink href="/" label="Dashboard" icon={Home} onClick={cl} active={act('/')} />
          <NavLink href="/lead" label="Leads" icon={Chat} onClick={cl} active={act('/lead')} />
          <NavLink href="/client" label="Clients" icon={Events} onClick={cl} active={act('/client')} />
          <NavLink href="/projects" label="Projects" icon={Enterprise} onClick={cl} active={act('/project')} />
          <NavLink href="/product" label="Products" icon={CropGrowth} onClick={cl} active={act('/product')} />
          <NavLink href="/pipeline" label="Pipelines" icon={Roadmap} onClick={cl} active={act('/pipeline')} />
        </div>
        <div className="bottom">
          <NavLink href="/mail" label="Mail" icon={Email} onClick={cl} active={act('/mail')} />
          <NavLink href="/user" label="User" icon={User} onClick={cl} active={act('/user')} />
          <NavLink href="/settings" label="Settings" icon={Settings} onClick={cl} active={act('/settings')} />
        </div>
      </div>
    </aside>
  )
}

export default Aside;