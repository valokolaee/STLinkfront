import { Flex } from "antd";
import CreateNewWallet from "../../assets/icons/CreateNewWallet";
import WalletIcon from "../../assets/icons/WalletIcon";
import BottomToTopAnimation from "../../components/ui/BottomToTopAnimation";
import SvgWrapper from "../../components/ui/SvgWrapper";
import Wallet from "../Dashboard/wallets";
import Form from "./form";
import SignUp from "../../assets/icons/SignUpSvg";

export default () => {

  return <BottomToTopAnimation childrenV={<SignUp />}>
    <Form />
  </BottomToTopAnimation>
};

