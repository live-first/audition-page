import React, {useState} from 'react';
import Modal from 'react-modal';
import './modal.scss';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const BaseModal:React.FC<Props> = ({
  title,
  children
}) => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  return (
    <div className='modal-base'>
      <button className='outline-btn open-modal-btn' onClick={() => (setEditModalIsOpen(true))}>
        {title}
      </button>
      <Modal isOpen={editModalIsOpen} overlayClassName='overlay' className='modal-md'>
        <div className='title'>{title}</div>
        <div className='content'>{children}</div>
        <div className='modal-footer'>
          <button onClick={() => (setEditModalIsOpen(false))} className='modal-close-btn'>
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default BaseModal;
