import SignUp from "../../../assets/icons/SignUpSvg";
import BottomToTopAnimation from "../../../components/ui/BottomToTopAnimation";
 
import RegisterForm from "./RegisterForm";

export default () => {

  return <BottomToTopAnimation childrenV={<SignUp />}>
    {/* <LoginForm /> */}

    <RegisterForm />
    {/* <RegisterForm /> */}
  </BottomToTopAnimation>
};

