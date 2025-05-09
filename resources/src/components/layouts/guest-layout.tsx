
type Props = {
  children: React.ReactNode;
}


export default function GuestLayout({ children }: Props) {
  return (
    <div className="guest-layout">
      {children}
    </div>
  )
}