import React from 'react';
import { Flex, Splitter, Typography } from 'antd';
import './index.css';
import IMasterDetail from './IMasterDetal';



const Desktop: React.FC<IMasterDetail> = ({ detail, master }) => (
  // <div >
  // <Flex>
  //   <div className='w-2/12'>
  //     {master}
  //   </div>
  //   <div>
  //     {detail}
  //   </div>
  // </Flex>
  // </div>
  <Splitter className='h-screen'>
    <Splitter.Panel defaultSize="15%" min="5%" max="20%"
      className='h-screen'
      style={{ backgroundColor: 'rgba(100, 100, 100, 0.1)' }}
    >
      {master}
    </Splitter.Panel>
    <Splitter.Panel
      className='h-screen'
    >
      {detail}
    </Splitter.Panel>
  </Splitter>
);

export default Desktop;