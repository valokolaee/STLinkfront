import { Flex } from "antd";
import DrawerIcon, { IDrawerIcon } from "../../ui/CMasterDetail/drawerIcon";
import Logo from "./Logo";
import TinyMenu from "./TinyMenu";
export default ({ className, drawer }: { className?: string; drawer?: IDrawerIcon }) => {
  return (
    <header className={" top-0 left-0 right-0 z-50 flex items-center justify-between   py-4 bg-dark border-b border-dark-gray " + className}>
      {drawer && <DrawerIcon {...drawer!} />}
      <Flex flex={1} className={drawer ? "justify-center" : ""}>
        <Logo />
      </Flex>
      <TinyMenu />
    </header>
  );
};
