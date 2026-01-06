import React, { useEffect } from "react";
import Skeleton from "./monitoring/Skeleton";
import LoginForm from "../components/ui/formings/LoginForm";
import { Router, useNavigate } from "react-router-dom";
import BottomToTopAnimation from "../components/ui/BottomToTopAnimation";
import WalletIcon from "../assets/icons/WalletIcon";
import CMasterDetail from "../components/ui/CMasterDetail";
import Item from "../components/layout/sideBar/item";
import { Login } from "@mui/icons-material";

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

      master={
        <Item icon={<Login />} label="Login" rout="/Login" />
      }
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