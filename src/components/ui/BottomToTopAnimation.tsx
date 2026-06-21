// src/components/BottomToTopAnimation.tsx
import React, { useEffect, useState } from 'react';
import SvgWrapper from './SvgWrapper';
import { Flex } from 'antd';
import useIsMobile from '../../hooks/useIsMobile';



export default ({ children, childrenV, className, duration=500 }: {
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
  const _width = useIsMobile() ? 'w-screen' : 'w-full '
  return (
    <Flex className={' h-full w-full  border-solidc overflow-scroll' + className} vertical >
      <div className='w-full justify-centerd items-centerd border-solidm  '>

        {!!!_children && <Flex
          className={`animate-bottom-to-top-vanish   items-center   relative  flex flex-col    justify-center ${className} `}
          style={{ animationDuration: `${duration}ms`, }}
        >
          <SvgWrapper className='w-1/2'>
            {childrenV}
          </SvgWrapper>
        </Flex>}

        <Flex vertical className={' items-center h-full   ' + _width}>

          <Flex className='animate-bottom-to-top absolute items-center justify-center h-4/5    '>
            <SvgWrapper className=' opacity-10  '>
              {childrenV}
            </SvgWrapper>
          </Flex>

          {_children && (
            <Flex
              vertical
              className={`animate-bottom-to-top w-full border-solidc ${className}`}
              style={{ animationDuration: `${duration}ms` }}
            >
              {_children}
            </Flex>
          )}
          {/* {_children && <Flex
           
            className={`animate-bottom-to-top  w-full   border-solid      ${className}`}
            style={{ animationDuration: `${duration}ms`, }} */}
          {/* > */}
            {/* {_children} */}
          {/* </Flex>} */}
        </Flex>
      </div>
    </Flex>
  );
};
