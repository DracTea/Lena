
type IconProps = {
  size?: number;
  className?: string;
}

export default function Icon({ size = 32, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <title>renew</title>
      <path d="M12,10H6.78A11,11,0,0,1,27,16h2A13,13,0,0,0,6,7.68V4H4v8h8Z" />
      <path d="M20,22h5.22A11,11,0,0,1,5,16H3a13,13,0,0,0,23,8.32V28h2V20H20Z" />
    </svg >
  )
}


