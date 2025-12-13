import { Splitter } from 'antd';
import React from 'react';
import IMasterDetail from './IMasterDetal';
import './index.css';



const Desktop: React.FC<IMasterDetail> = ({ detail, master }) => (

  <Splitter
    className=' h-full w-full  '
  >
    <Splitter.Panel defaultSize="20%" min="10%" max="30%"
      style={{ backgroundColor: 'rgba(100, 100, 100, 0.1)' }}
    >
      {master}
    </Splitter.Panel>
    <Splitter.Panel
    // style={{height:'91%'}}
    // className='border-solid ' 
    >
      {detail}
    </Splitter.Panel>
  </Splitter>
);

export default Desktop;