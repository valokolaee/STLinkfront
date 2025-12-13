import { Flex, FloatButton } from "antd";
import CreateNewWallet from "../assets/icons/CreateNewWallet";
import WalletIcon from "../assets/icons/WalletIcon";
import BottomToTopAnimation from "../components/ui/BottomToTopAnimation";
import SvgWrapper from "../components/ui/SvgWrapper";
import Wallet from "./Dashboard/wallet";
import { AddAPhoto } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default () => {
  const n = useNavigate()
  // useEffect(() => {
  // }, [])
  const _goToAddWallet = () => {
    n('/addWallet')

  }

  return <BottomToTopAnimation childrenV={<WalletIcon />}>
    <Wallet />
    <SvgWrapper className="w-14 fixed bottom-6 right-6 " onClick={_goToAddWallet}>
      <CreateNewWallet />
    </SvgWrapper>
  </BottomToTopAnimation>
};

