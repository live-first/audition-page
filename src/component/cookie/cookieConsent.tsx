import React, { useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import Modal from 'react-modal';
import CooliePolicy from './cookiePolicy.tsx';
import './cookieConsent.scss';

const CookieConsentView = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  return (
    <CookieConsent
      debug={false}
      buttonText='同意する'
      cookieName='myAwesomeCookieName'
      disableStyles={true}
      style={{
				position: 'fixed',
        bottom: '0',
        backgroundColor: '#ffffff',
        padding: '10px',
        zIndex: '100',
        boxShadow: '0 -4px 7px 0 #a6a6a6'
      }}
      contentStyle={{
        //
      }}
      buttonStyle={{
        display: 'flex',
        borderRadius: '5px',
        backgroundColor: '#e14040',
        border: 'none',
        color: '#ffffff',
        padding: '5px',
        margin: '0 0 0 auto',
        justifyContent: 'flex-end'
      }}
      expires={150}
    >
      このウェブサイトではサイトの利便性の向上を目的にクッキーを使用します。ブラウザの設定によりクッキーの機能を変更することもできます。詳細は
      <button className='modal-btn' onClick={() => setEditModalIsOpen(true)}>クッキーポリシー</button>
        <Modal isOpen={editModalIsOpen} onRequestClose={() => (setEditModalIsOpen(false))} overlayClassName='overlay' className='modal-md'>
          <CooliePolicy />
        </Modal>
      をご覧ください。サイトを閲覧いただく際には、クッキーの使用に同意いただく必要があります。
    </CookieConsent>
  );
}

export default CookieConsentView;
