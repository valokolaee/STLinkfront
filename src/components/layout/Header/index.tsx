import { Flex } from "antd";
import DrawerIcon, { IDrawerIcon } from "../../ui/CMasterDetail/drawerIcon";
import Logo from "./Logo";
import TinyMenu from "./TinyMenu";
import { Header } from "antd/es/layout/layout";
import { shadow } from "../../../css/classNames";
export default ({ drawer }: { drawer?: IDrawerIcon }) => {
  return (



    // <Flex flex={20} className={"absolute  w-screen  z-50 flex items-center justify-between    bg-dark border-b border-dark-gray "} style={{height:'10%'}}>
    <Flex
      className={"w-screen p-2" + shadow}
    // style={{ height: '10%' }}
    >
      {drawer && <DrawerIcon {...drawer!} />}
      <Flex flex={1} className={drawer ? "justify-center" : ""}>
        <Logo />
      </Flex>
      <TinyMenu />
    </Flex>
  );
};
