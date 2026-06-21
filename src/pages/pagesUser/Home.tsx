import { Login } from "@mui/icons-material";
import React from "react";
import Item from "../../components/layout/sideBar/item";
import CMasterDetail from "../../components/ui/CMasterDetail";

const Home: React.FC = () => {
  // const n = useNavigate()
  // useEffect(() => {
  //   n('register')
  // }, [])

  return (
    <CMasterDetail
      detail={
        <>
          welcome!
        </>

      }

      // master={
      //   <Item icon={<Login />} label="Login" rout="/Login" />
      // }
    />
    //  <LoginForm />

    // <CMasterDetail
    //   master={<div></div>}
    //   detail={

    // <BottomToTopAnimation childrenV={<WalletIcon />}>

    // <Skeleton />

    // </BottomToTopAnimation>
    //   }

    // />
  );
};

export default Home;