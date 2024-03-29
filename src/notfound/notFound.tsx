import React from 'react';
import { Link  } from 'react-router-dom';
import { Container } from '@mui/material';
import BaseView from '../component/view/baseView.tsx';
import './notFound.scss';

const MainView = () => {
  return (
    <div className='news'>
      <Container maxWidth='lg'>
        ページが存在しません。
        <Link to='/'>トップ</Link>に戻る
      </Container>
    </div>
  );
}

const NotFoundView = () => {
  return (
    <BaseView main={<MainView/>} />
  );
}

export default NotFoundView;
