import { Flex } from "antd";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import CLink from "../../ui/CLink";
import "./SideBarItem.css"; // Optional: for additional custom styles
import { shadowX, shadowY } from "../../../css/classNames";
import { IRouteConfig } from "../../../protectedRouts/types/IRouteConfig";

export default ({ path, sideBar }: IRouteConfig) => {
  const { icon,label}=sideBar||{}

  const location = useLocation();
  const isActive = location.pathname?.toLocaleLowerCase() === path?.toLocaleLowerCase();

  
  return (
    <div className={`sidebar-item ${isActive ? 'sidebar-item--active' : ''} ${'shadowY'}`}>
      <Link to={path!} className="sidebar-item__link">
        <Flex align="center" gap="middle" className="sidebar-item__contento ">
          <div className="sidebar-item__icon  text-xl"  >
            {icon}
          </div>
          <div className="sidebar-item__label">
            <CLink to={path!} title={label} />
          </div>
        </Flex>
      </Link>
      <div className="sidebar-item__divider" />
    </div>
  );
};

export interface ISideBarItem {
  icon?: ReactNode;
  label?: string;
}