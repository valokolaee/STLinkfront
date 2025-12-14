import { useState } from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import Header from '../../layout/Header';
import Desktop from './desktop';
import IMasterDetail from './IMasterDetal';
import './index.css';
import Mobile from './mobile';
import { Flex } from 'antd';


export default ({ detail, master }: IMasterDetail) => {
  const _isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const drawer = { toggleOpen: setOpen, isOpen: open };

  return (
    <Flex vertical className="h-screen overflow-hidden  ">
      <Header drawer={_isMobile ? drawer : undefined} />

      <Flex vertical
        className="overflow-hidden flex flex-col     "
       >
        {_isMobile ?
          <Mobile drawer={drawer} md={{ master, detail }} />
          :
          <Desktop master={master} detail={detail} />
        }
      </Flex>
    </Flex>
  );
};