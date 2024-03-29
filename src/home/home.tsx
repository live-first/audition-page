import React from 'react';
import { Container } from '@mui/material';
import './home.scss';
import BaseView from '../component/view/baseView.tsx';

const Home = () => {

  return (
    <div className='home'>
      <Container maxWidth='sm' className='content-bg'>
        <div className='top-view'>
          <div className='rect-view shape-position1'></div>
          <div className='rect-view shape-position2'></div>
          <div className='rect-view shape-position3'></div>
          <div className='arrow-clippath' style={{top: '230px', left: '-10%', width: '600px'}}></div>
          <div className='arrow-clippath' style={{top: '300px', left: '-10%'}}></div>
          <div className='arrow-clippath' style={{top: '700px', left: '-10%'}}></div>
          <div className='arrow-clippath' style={{top: '730px', left: '-10%', width: '600px'}}></div>
          <div className='vertical-text p-absolute' style={{top: '300px', left: '20%'}}>メンバー</div>
          <div className='vertical-text p-absolute' style={{top: '380px', left: '0'}}>募集中<span className='rotate-font'>！</span></div>
        </div>
      </Container>
    </div>
  );
}

const HomeView = () => {
  return (
    <BaseView main={<Home/>} />
  );
}

export default HomeView;
