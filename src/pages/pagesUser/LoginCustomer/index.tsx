import LoginSvg from "../../../assets/icons/LoginSvg";
import BottomToTopAnimation from "../../../components/ui/BottomToTopAnimation";
import CLink from "../../../components/ui/CLink";
import CText from "../../../components/ui/CText";
import LoginForm from "./LoginForm";

export default () => {
    // return <CLink
    //     to={'/register'}
    //     title="register"
    // />

    return <BottomToTopAnimation childrenV={<LoginSvg />}>
        <LoginForm />
       
    </BottomToTopAnimation>
};

