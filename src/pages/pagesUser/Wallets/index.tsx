import WalletIcon from "../../../assets/icons/WalletIcon";
import BottomToTopAnimation from "../../../components/ui/BottomToTopAnimation";
import Wallets from "../components/wallets";

export default () => {


  return <BottomToTopAnimation
    childrenV={<WalletIcon />}
  >
    <Wallets />
  </BottomToTopAnimation>
};

