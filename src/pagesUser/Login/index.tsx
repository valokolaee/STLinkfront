import { Flex } from "antd";
import CreateNewWallet from "../../assets/icons/CreateNewWallet";
import WalletIcon from "../../assets/icons/WalletIcon";
import BottomToTopAnimation from "../../components/ui/BottomToTopAnimation";
import SvgWrapper from "../../components/ui/SvgWrapper";
import Wallet from "../components/wallets";
import SignUp from "../../assets/icons/SignUpSvg";
import Login from "./Login";
import LoginSvg from "../../assets/icons/LoginSvg";

export default () => {

    return <BottomToTopAnimation childrenV={<LoginSvg />}>
        <Login />
    </BottomToTopAnimation>
};

