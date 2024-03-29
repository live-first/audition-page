import React from 'react';
import Button from './button.tsx';
import './button.scss';

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  radius?: string;
  width?: string;
  height?: string;
  color?: string;
  disabled?: boolean;
}

const EllipseButton = (props: Props) => {
  const {className,children,onClick,radius,width,height,color,disabled} = props;
  return (
    <Button className={`ellipse-btn ${className}`} radius={radius} width={width} height={height} color={color} onClick={onClick} disabled={disabled}>{children}</Button>
  );
}

export default EllipseButton;
