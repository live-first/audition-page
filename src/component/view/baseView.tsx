import React from 'react';
import { motion } from 'framer-motion';
import './baseView.scss';

interface Props {
  header?: React.ReactNode;
  main?: React.ReactNode;
  footer?: React.ReactNode;
  semiModal?: React.ReactNode;
}

const BaseView:React.FC<Props> = ({
  main,
  semiModal
}) => {

  const pageTransition = {
    duration: 1,
    opacity: { ease: 'easeOut', duration: 1 }
  };
  
  return (
    <div className='base-view'>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={pageTransition}
        >
        {main}
        </motion.div>
      </main>
      {semiModal}
    </div>
  );
}

export default BaseView;
