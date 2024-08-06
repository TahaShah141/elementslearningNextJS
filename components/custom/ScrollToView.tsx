import React, { useRef, useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

type ScrollToViewProps = {
  className?: string;
  children: ReactNode;
};

export const ScrollToView: React.FC<ScrollToViewProps> = ({ className, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (inView && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth'});
    }
  }, [inView, sectionRef]);

  return (
    <section style={{backgroundColor: inView ? "#ff0000" : "transparent"}} ref={(node) => { ref(node); sectionRef.current = node; }} className={className}>
      {children}
    </section>
  );
};