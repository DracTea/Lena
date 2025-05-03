import { Aside } from "../ui/shell"
import { useWs } from '@/globals/stores';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { init } = useWs();
  init();

  return (
    <div className="ath-auth-layout">
      <Aside />
      <div className="ath-auth-layout__content">
        {children}
      </div>
    </div>
  )
}