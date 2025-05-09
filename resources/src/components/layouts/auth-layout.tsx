import { Home, Settings, SubVolume, Image, User } from "@/sora/icons";
import { useRouter } from "@sora/routing";

type Props = {
  children: React.ReactNode;
}


function Aside() {
  const {push,path} = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, path: string) {
    e.preventDefault();
    push(path);
  }

  return (
    <aside className="aside-main">
      <div className="aside-main__container">
        <div className="aside-main__top">
          <a href="/apanel" className={`${path === "/apanel" ? "active" : ""}`} onClick={(e) => handleClick(e, "/apanel")}>
            <Home />
          </a>
        </div>
        <div className="aside-main__middle">
          <a href="/apanel/pages" className={`${path === "/apanel/pages" ? "active" : ""}`} onClick={(e) => handleClick(e, "/apanel/pages")}>
            <SubVolume />
          </a>
          <a href="/apanel/media" className={`${path === "/apanel/media" ? "active" : ""}`} onClick={(e) => handleClick(e, "/apanel/media")}>
            <Image />
          </a>
        </div>
        <div className="aside-main__bottom">
          <a href="/apanel/user" className={`${path === "/apanel/user" ? "active" : ""}`} onClick={(e) => handleClick(e, "/apanel/user")}>
            <User />
          </a>
          <a href="/apanel/settings" className={`${path === "/apanel/settings" ? "active" : ""}`} onClick={(e) => handleClick(e, "/apanel/settings")}>
            <Settings />
          </a>
        </div>
      </div>
    </aside>
  )
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="auth-layout">
      <Aside />
      <div className="content">
        {children}
      </div>
    </div>
  )
}