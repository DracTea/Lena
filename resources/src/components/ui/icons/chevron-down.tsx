
type IconProps = {
  size?: number;
  className?: string;
}

export default function Icon({ size = 32, className }: IconProps) {
  return (
    <svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} width={size} height={size}>
      <polygon points="16,22 6,12 7.4,10.6 16,19.2 24.6,10.6 26,12 " />
    </svg>
  )
}


