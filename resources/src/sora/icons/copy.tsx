
type IconProps = {
  size?: number;
  className?: string;
}

export default function Icon({ size = 32, className }: IconProps) {
  return (
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} width={size} height={size}>
      <title>copy</title>
      <path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z" transform="translate(0)" />
      <path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z" transform="translate(0)" />
    </svg>
  )
}