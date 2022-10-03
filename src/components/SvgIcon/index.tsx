export interface SvgIconProps {
    prefix: string;
    color: string;
    [key: string]: string;
  }


  export default function SvgIcon({
    name,
    prefix = 'icon',
    color = '#333',
    ...props
  }: SvgIconProps) {
    const symbolId = `#${prefix}-${name}`;
  
    return (
      <svg {...props} aria-hidden="true">
        <use href={symbolId} fill={color} />
      </svg>
    );
  }