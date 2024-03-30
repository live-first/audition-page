import React from 'react';
import './contentView.scss';

interface Props {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

const ContentView = (props: Props) => {
  const {title,className,children} = props;

  return (
    <div className={`${className} content-area`} >
      <div className='content-title f-textshadow'>{title}</div>
      <div className='content-body'>
        {children}
      </div>
    </div>
  );
}

export default ContentView;
