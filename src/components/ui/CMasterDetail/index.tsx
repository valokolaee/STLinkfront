import { useState } from 'react';
import useIsMobile from '../../../hooks/useIsMobile';
import Header from '../../layout/Header';
import Desktop from './desktop';
import IMasterDetail from './IMasterDetal';
import './index.css';
import Mobile from './mobile';



export default ({ detail, master }: IMasterDetail) => {
  const _isMobile = useIsMobile();
  const [open, setOpen] = useState(true);

  const drawer = { toggleOpen: setOpen, isOpen: open }
  return <>
    <Header className='fixed' drawer={_isMobile ? drawer : undefined} />
    <Header /> {/* this header is added only for adjustment */}

    {_isMobile ?
      <Mobile drawer={drawer} md={{ master, detail }} />
      :
      <Desktop master={master} detail={detail} />
    }
  </>

}

