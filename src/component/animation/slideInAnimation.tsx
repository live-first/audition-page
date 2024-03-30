import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

interface Props {
  className?: string;
  children?: React.ReactNode;
  upLeft?: string;
}

const SlideInAnimation = (props: Props) => {
  const {className,children,upLeft} = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div className={className} style={{
        transform: isInView ? 'none' : `translateX(${upLeft ? upLeft : '-200'}px)`,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }}>
        {children}
      </div>
    </section>
  );
}

export default SlideInAnimation;
