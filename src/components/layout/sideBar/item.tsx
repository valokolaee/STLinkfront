import { Flex } from "antd";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import CLink from "../../ui/CLink";
import "./SideBarItem.css"; // Optional: for additional custom styles

export default ({ icon, label, rout }: ISideBarItem) => {
  const location = useLocation();
  const isActive = location.pathname === rout;

  return (
    <div className={`sidebar-item ${isActive ? 'sidebar-item--active' : ''}`}>
      <Link to={rout!} className="sidebar-item__link">
        <Flex align="center" gap="middle" className="sidebar-item__content">
          <div className="sidebar-item__icon">
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