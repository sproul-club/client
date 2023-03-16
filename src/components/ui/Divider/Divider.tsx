import { HTMLProps } from 'react';
import classes from '../../../utils/classes';

interface Props extends HTMLProps<HTMLDivElement> {
  height?: string;
  color?: string;
}

export default function Divider({
  height = '1px',
  color = 'transparent',
  className,
  ...divProps
}: Props) {
  return (
    <div
      style={{
        height: height,
        width: '100%',
        backgroundColor: color,
      }}
      className={classes(className)}
      {...divProps}
    />
  );
}
