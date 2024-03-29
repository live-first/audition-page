import React from 'react';
import './titleView.scss';

interface Title {
  english: string,
  japaniese: string
}

const TitleView = (props: Title) => {
  const {english, japaniese} = props;

  return (
    <div className='title-font'>
      {english}
      <div className='ja'>{japaniese}</div>
    </div>
  );
}

export default TitleView;
