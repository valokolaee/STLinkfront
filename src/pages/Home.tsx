import React, { useEffect } from "react";
import Skeleton from "./monitoring/components/Skeleton";
import LoginForm from "../components/ui/formings/LoginForm";
import { Router, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const n = useNavigate()
  useEffect(() => {
    n('register')
  }, [])

  return (

    //  <LoginForm />

    // <CMasterDetail
    //   master={<div></div>}
    //   detail={

    <Skeleton />
    //   }

    // />
  );
};

export default Home;