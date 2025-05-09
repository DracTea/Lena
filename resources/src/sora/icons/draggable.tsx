
type IconProps = {
  size?: number;
  className?: string;
}

export default function Icon({ size = 32, className }: IconProps) {
  return (
    <svg version="1.1" id="icon" className={className} width={size} height={size} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32" xmlSpace="preserve">
      <title>draggable</title>
      <rect x="10" y="6" width="4" height="4" />
      <rect x="18" y="6" width="4" height="4" />
      <rect x="10" y="14" width="4" height="4" />
      <rect x="18" y="14" width="4" height="4" />
      <rect x="10" y="22" width="4" height="4" />
      <rect x="18" y="22" width="4" height="4" />
    </svg>

  )
}


