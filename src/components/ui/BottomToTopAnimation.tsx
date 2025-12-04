// src/components/BottomToTopAnimation.tsx
import React, { useEffect, useState } from 'react';

interface BottomToTopAnimationProps {
  content?: React.ReactNode;
  duration?: number;
  className?: string;
}

export default ({ children, childrenV, className, duration }: {
  childrenV?: React.ReactNode;
  children?: React.ReactNode;
  duration?: number;
  className?: string;
}) => {
  const [_children, set_children] = useState<React.ReactNode | undefined>(undefined)
  useEffect(() => {
    setTimeout(() => {
      set_children(children)
    }, duration);
  }, [])
  return (
    <div

    // className="border-solid  "
    >
      <div
        className={`animate-bottom-to-top-vanish items-center relative overflow-hidden flex flex-col  justify-center ${className}`}
        style={{
          animationDuration: `${duration}ms`,
        }}
      >
        <div>

          {childrenV}
        </div>
      </div>
      {_children && <div
        className={`animate-bottom-to-top ${className}`}
        style={{
          animationDuration: `${duration}ms`,
        }}
      >
        {_children}
      </div>}
    </div>
  );
};
