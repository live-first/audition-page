import React, { useRef } from 'react';
import { useInView } from "framer-motion";
import './contentTitleView.scss';

interface ContentTitleProp {
  children?: React.ReactNode;
}

const ContentTitleView = (props: ContentTitleProp) => {
  const {children} = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div className='title-head'
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <span className='title-gradetion'>
          {children}
        </span>
      </div>
      
    </section>
  );
}

export default ContentTitleView;
