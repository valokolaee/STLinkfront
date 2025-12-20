import { Flex, Splitter } from 'antd';
import React from 'react';
import IMasterDetail from './IMasterDetal';
import './index.css';
import Header from '../../layout/Header';



const Desktop: React.FC<IMasterDetail> = ({ detail, master }) => (

  <Flex vertical className='   h-screen w-screen border-solidg '>
    <Flex flex={1} className='w-screen border-solidc' >
      <Header  />
    </Flex>
    <Flex flex={10} className='border-solids overflow-scroll '>
      <Splitter
        className='   w-full    flex flex-row  border-solidh overflow-scroll'
      >

        <Splitter.Panel defaultSize="20%" min="10%" max="30%"
          style={{ backgroundColor: 'rgba(100, 100, 100, 0.1)' }}
          // className='h-full'
        >
          {master}
        </Splitter.Panel>
        <Splitter.Panel
        // style={{height:'91%'}}
        className='border-solidg overflow-scroll ' 
        >
          {detail}
        </Splitter.Panel>
      </Splitter>
    </Flex>
  </Flex>
);

export default Desktop;