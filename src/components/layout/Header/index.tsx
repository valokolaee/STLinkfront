import { Flex } from "antd";
import { shadowX } from "../../../css/classNames";
import DrawerIcon, { IDrawerIcon } from "../../ui/CMasterDetail/drawerIcon";
import Logo from "./Logo";
import TinyMenu from "./TinyMenu";
export default ({ drawer }: { drawer?: IDrawerIcon }) => <Flex className={"p-1  border-solidm w-screen" + shadowX}>
  {drawer && <DrawerIcon {...drawer!} />}
  <Flex flex={1} className={drawer ? "justify-center" : ""}>
    <Logo />
  </Flex>
  <TinyMenu />
</Flex>
