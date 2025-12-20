import { Flex } from "antd";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import CLink from "../../ui/CLink";
import "./SideBarItem.css"; // Optional: for additional custom styles
import { shadowX, shadowY } from "../../../css/classNames";

export default ({ icon, label, rout }: ISideBarItem) => {
  const location = useLocation();
  const isActive = location.pathname?.toLocaleLowerCase() === rout?.toLocaleLowerCase();

  return (
    <div className={`sidebar-item ${isActive ? 'sidebar-item--active' : ''} ${shadowX}`}>
      <Link to={rout!} className="sidebar-item__link">
        <Flex align="center" gap="middle" className="sidebar-item__contento ">
          <div className="sidebar-item__icon  text-xl"  >
            {icon}
          </div>
          <div className="sidebar-item__label">
            <CLink to={rout!} title={label} />
          </div>
        </Flex>
      </Link>
      <div className="sidebar-item__divider" />
    </div>
  );
};

export interface ISideBarItem {
  icon?: ReactNode;
  rout?: string;
  label?: string;
}