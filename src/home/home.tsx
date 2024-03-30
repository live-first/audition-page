import React from 'react';
import { Container } from '@mui/material';
import './home.scss';
import BaseView from '../component/view/baseView.tsx';
import SlideInAnimation from '../component/animation/slideInAnimation.tsx';
import SlideUpAnimation from '../component/animation/slideUpAnimation.tsx';
import EllipseButton from '../component/button/ellipseButton.tsx';
import ContentView from '../component/view/contentView.tsx';

const Home = () => {

  return (
    <div className='home'>
      <Container maxWidth='sm' className='content-bg' style={{padding: '0'}}>
        <div className='top-view'>
          <div className='layer-1'>
            <div className='rect-view shape-position1'></div>
            <SlideInAnimation className='title'>新アイドルグループ</SlideInAnimation>
            <SlideInAnimation className='message'>
              <div className='top'>私たちと一緒に</div>
              <div className='middle'>最高のアイドルグループを</div>
              <div className='bottom'>目指しませんか？</div>
            </SlideInAnimation>        
          </div>
          
          <div className='layer-2'>
            <div className='arrow-clippath arrow-1'></div>
            <div className='arrow-clippath arrow-2'></div>
            <div className='arrow-clippath arrow-3'></div>
            <div className='arrow-clippath arrow-4'></div>
            <div className='p-absolute layer-2-absolute d-flex'>
              <SlideUpAnimation className='d-flex'>
                <div className='vertical-text' style={{top: '380px', left: '0'}}>募集中<span className='rotate-font'>！</span></div>
                <div className='vertical-text' style={{transform: 'translate(-40px,-50px)'}}>メンバー</div>
              </SlideUpAnimation>
              <div className='rect-view shape-position2'></div>
            </div>
          </div>

          <div className='layer-3'>
            <SlideUpAnimation className='audition-title f-textshadow'>
              <div>新規アイドルグループ</div>
              <div className='f-large'>メンバーオーディション</div>
            </SlideUpAnimation>

            <SlideUpAnimation className='official-line-area'>
              <div className='entry-label'>▼エントリー、ご質問などはこちらから▼</div>
              <EllipseButton className='entry-btn'>公式ライン</EllipseButton>
            </SlideUpAnimation>

            <SlideUpAnimation>
              <ContentView title='募集締切'></ContentView>
            </SlideUpAnimation>

            <SlideUpAnimation>
              <ContentView title='募集内容'></ContentView>
            </SlideUpAnimation>

            <SlideUpAnimation>
              <ContentView title='応募資格'></ContentView>
            </SlideUpAnimation>

            <SlideUpAnimation>
              <ContentView title='オーディションスケジュール'></ContentView>
            </SlideUpAnimation>

            <SlideUpAnimation>
              <ContentView title='応募方法' className='official-line-area'>
                <div className='entry-label-dark'>▼エントリー、ご質問などはこちらから▼</div>
                <EllipseButton className='entry-btn'>公式ライン</EllipseButton>
              </ContentView>
            </SlideUpAnimation>
            
          </div>
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
