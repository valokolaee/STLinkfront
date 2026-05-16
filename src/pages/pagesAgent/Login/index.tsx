import LoginSvg from "../../../assets/icons/LoginSvg";
import BottomToTopAnimation from "../../../components/ui/BottomToTopAnimation";
import Login from "./LoginAgent";

export default () => {

    return <BottomToTopAnimation childrenV={<LoginSvg />}>
        <Login />
    </BottomToTopAnimation>
};

