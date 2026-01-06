// src/components/BottomToTopAnimation.tsx
import React from 'react';



export default ({ children, className,onClick }: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {

  return (
    <div className={`${className} ${onClick?' cursor-pointer ':''}`} onClick={onClick}>
      {children}
    </div>
  );
};
