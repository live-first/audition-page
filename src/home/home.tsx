import React from 'react';
import { Container } from '@mui/material';
import './home.scss';
import BaseView from '../component/view/baseView.tsx';
import SlideInAnimation from '../component/animation/slideInAnimation.tsx';
import SlideUpAnimation from '../component/animation/slideUpAnimation.tsx';
import EllipseButton from '../component/button/ellipseButton.tsx';
import ContentView from '../component/view/contentView.tsx';
import { IoMdCheckmark, IoMdArrowRoundDown } from "react-icons/io";
import { HiMusicNote } from "react-icons/hi";

const Home = () => {

  const OnLine = () => {
    window.open("https://lin.ee/YmMmBif", '_blank');
  }

  return (
    <div className='home'>
      <Container maxWidth='sm' className='content-bg' style={{padding: '0'}}>
        <div className='top-view'>
          <div className='layer-1'>
            <div className='rect-view shape-position1'></div>
            <SlideInAnimation>
              <div className='title'>新アイドルグループ</div>
            </SlideInAnimation>
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
                <div className='vertical-text vertical-member'>メンバー</div>
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
              <EllipseButton className='entry-btn' onClick={OnLine}>公式ライン</EllipseButton>
            </SlideUpAnimation>

            <SlideUpAnimation>
              <ContentView title='募集締切'>
                <div>2024 / 6 / 15 (土)</div>
                <div className='f-sm'>※それより前に締め切ることもあります。</div>
              </ContentView>
            </SlideUpAnimation>

            <SlideUpAnimation>
              <ContentView title='募集内容'>
                <div className='t-start'>
                  <div className='sub-title'><HiMusicNote style={{transform: 'translateY(2px)'}}/>どんなグループか</div>
                  <div className='first-text'>王道、清純派アイドルグループ。</div>
                  <div className='first-text mb-sm'>9〜10月デビューに向けてメンバーを募集します。</div>
                  <div className='first-text mb-sm'>5〜7人組のグループを予定しています。また、大きいイベントに出演を目指して活動していきます。多くのファンに受け入れて応援してもらえるように、運営一同サポートしていきたいと思っています！</div>
                  <div className='first-text mb-sm'>詳細は、面接時に説明したいと思っております。</div>
                  <div className='sub-title'><HiMusicNote style={{transform: 'translateY(2px)'}}/>私たちの特徴</div>
                  <div className='first-text mb-sm'>イベント制作として主催ライブ及び大きいイベントを裏方として支えてきました。この度、アイドル業界での制作視点での知見及び経験を活かしアイドルグループをプロデュースする運びとなりました。</div>
                  <div className='sub-title'><HiMusicNote style={{transform: 'translateY(2px)'}}/>オーディション参加費</div>
                  <div className='first-text'>ありません</div>
                  <div className='second-text mb-sm'>※但し、面接会場までの交通費のみご負担頂きます。</div>
                  <div className='sub-title'><HiMusicNote style={{transform: 'translateY(2px)'}}/>合格後にかかる費用</div>
                  <div className='first-text'>ありません</div>
                  <div className='first-text'>レッスン、衣装など活動にかかる費用はかかりません。</div>
                  <div className='second-text mb-sm'>※但し、交通費のみご負担頂きます。</div>
                </div>
              </ContentView>
            </SlideUpAnimation>

            <SlideUpAnimation>
              <ContentView title='応募資格'>
                <div className='t-start'>
                  <div><IoMdCheckmark style={{transform: 'translateY(2px)'}}/>16〜22歳の女性</div>
                  <div className='f-sm'>　　※未成年者は親権者の同意が必要</div>
                  <div><IoMdCheckmark style={{transform: 'translateY(2px)'}}/>心身ともに健康な方</div>
                  <div><IoMdCheckmark style={{transform: 'translateY(2px)'}}/>主に都内で活動ができる方</div>
                  <div><IoMdCheckmark style={{transform: 'translateY(2px)'}}/>意欲と向上心のある方</div>
                  <div><IoMdCheckmark style={{transform: 'translateY(2px)'}}/>経験不問</div>
                  <div><IoMdCheckmark style={{transform: 'translateY(2px)'}}/>他事務所やレコード会社と契約のない方</div>
                </div>
              </ContentView>
            </SlideUpAnimation>

            <SlideUpAnimation>
              <ContentView title='オーディションスケジュール'>
                <div className='t-start'>
                  <div>1次審査：書類審査</div>
                  <div className='second-text'>公式ラインに必要事項をお送りください。</div>
                  <div className='second-text'>その内容を元に判断し、1週間以内に結果をご連絡いたします。</div>
                  <div><IoMdArrowRoundDown /></div>
                  <div>2次審査：面接（原則対面（都内））</div>
                  <div className='second-text'>1次選考通過の方に別途ご案内いたします。</div>
                  <div><IoMdArrowRoundDown /></div>
                  <div>最終審査：ダンス、歌唱</div>
                  <div className='second-text'>2次面接時にご案内いたします。</div>
                </div>

              </ContentView>
            </SlideUpAnimation>

            <SlideUpAnimation>
              <ContentView title='応募方法' className='official-line-area'>
                <div className='entry-label-dark'>▼エントリー、ご質問などはこちらから▼</div>
                <EllipseButton className='entry-btn entry-btn-anime' onClick={OnLine}>公式ライン</EllipseButton>
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
