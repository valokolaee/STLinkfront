import DeviceSvg from "../../../assets/icons/deviceSvg";
import BottomToTopAnimation from "../../../components/ui/BottomToTopAnimation";
import Devices from "../components/devices";

export default () => {


  return <BottomToTopAnimation
    childrenV={<DeviceSvg />}
  >
    <Devices />
  </BottomToTopAnimation>
};

