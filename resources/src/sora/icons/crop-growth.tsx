
type IconProps = {
  size?: number;
  className?: string;
}

export default function Icon({ size = 32, className }: IconProps) {
  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" className={className}>
      <path d="M26,13a4.0045,4.0045,0,0,0,4-4V6H27a3.979,3.979,0,0,0-2.7468,1.1064A6.0041,6.0041,0,0,0,19,4H16V7a6.0066,6.0066,0,0,0,6,6h1V26H11V21h1a4.0045,4.0045,0,0,0,4-4V14H13a3.979,3.979,0,0,0-2.7468,1.1064A6.0041,6.0041,0,0,0,5,12H2v3a6.0066,6.0066,0,0,0,6,6H9v5H2v2H30V26H25V13Zm-1-3a2.002,2.002,0,0,1,2-2h1V9a2.002,2.002,0,0,1-2,2H25ZM11,18a2.002,2.002,0,0,1,2-2h1v1a2.002,2.002,0,0,1-2,2H11ZM9,19H8a4.0045,4.0045,0,0,1-4-4V14H5a4.0045,4.0045,0,0,1,4,4Zm14-8H22a4.0045,4.0045,0,0,1-4-4V6h1a4.0045,4.0045,0,0,1,4,4Z" transform="translate(0 0)" />
    </svg>
  )
}