import React, { useEffect } from "react";
import Skeleton from "./monitoring/components/Skeleton";
import LoginForm from "../components/ui/formings/LoginForm";
import { Router, useNavigate } from "react-router-dom";
import BottomToTopAnimation from "../components/ui/BottomToTopAnimation";
import WalletIcon from "../assets/icons/WalletIcon";

const Home: React.FC = () => {
  // const n = useNavigate()
  // useEffect(() => {
  //   n('register')
  // }, [])

  return (
    <>
      welcome!
    </>
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