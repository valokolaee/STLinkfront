import EditProfile from "../../assets/icons/EditProfile";
import WalletIcon from "../../assets/icons/WalletIcon";
import BottomToTopAnimation from "../../components/ui/BottomToTopAnimation";
import Frame from "./Frame";
import ProfileForm from "./ProfileForm";

export default () =>
    <BottomToTopAnimation
        childrenV={<EditProfile />}>
        <Frame />
        {/* <ProfileForm /> */}

    </BottomToTopAnimation>