import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

interface Props {
  className?: string;
  children?: React.ReactNode;
  upHeight?: string;
}

const SlideUpAnimation = (props: Props) => {
  const {className,children,upHeight} = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div className={className} style={{
        transform: isInView ? 'none' : `translateY(${upHeight ? upHeight : '100'}px)`,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }}>
        {children}
      </div>
    </section>
  );
}

export default SlideUpAnimation;
