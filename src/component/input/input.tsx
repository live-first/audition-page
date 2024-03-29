import React from 'react';
import './input.scss';

interface Props {
  label: string;
}

const BaseInput:React.FC<Props> = ({
  label
}) => {
  return (
    <div className='input-area'>
      <div className='input-label'>{label}</div>
      <input className='input' />
    </div>
  );
}

export default BaseInput;
