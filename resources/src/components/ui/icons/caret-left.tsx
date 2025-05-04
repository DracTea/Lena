
type IconProps = {
  size?: number;
  className?: string;
}

export default function Icon({ size = 32, className }: IconProps) {
  return (
    <svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} width={size} height={size}>
      <title>caret--right</title>
      <polygon points="20,24 10,16 20,8 " />
    </svg>
  )
}