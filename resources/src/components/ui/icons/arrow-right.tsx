
type IconProps = {
  size?: number;
  className?: string;
}

export default function Icon({ size = 32, className }: IconProps) {
  return (
    <svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" className={className}>
      <title>caret--right</title>
      <polygon points="12,8 22,16 12,24 " />
    </svg>

  )
}


