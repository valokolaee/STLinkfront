import { useNavigate } from "react-router-dom";
import CreateNewWallet from "../../assets/icons/CreateNewWallet";
import WalletIcon from "../../assets/icons/WalletIcon";
import BottomToTopAnimation from "../../components/ui/BottomToTopAnimation";
import SvgWrapper from "../../components/ui/SvgWrapper";
import Wallets from "../components/wallets";
import Devices from "../components/devices";
import { DeveloperBoard } from "@mui/icons-material";
import DeviceSvg from "../../assets/icons/deviceSvg";

export default () => {


  return <BottomToTopAnimation
    childrenV={<DeviceSvg />}
  >
    <Devices />
  </BottomToTopAnimation>
};

