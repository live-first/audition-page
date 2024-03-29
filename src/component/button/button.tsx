import React from 'react';
import './button.scss';

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  border?: string;
  color?: string;
  height?: string;
  radius?: string;
  width?: string;
  disabled?: boolean;
}

const Button = (props: Props) => {
  const {className,children,onClick,border,color,height,radius,width,disabled} = props;
  return (
    <button onClick={onClick} className={`button ${className}`} style={{
      backgroundColor: color,
      border,
      borderRadius: radius,
      height,
      width
    }} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
