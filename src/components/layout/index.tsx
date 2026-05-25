// src/components/layout/Layout.tsx
import React from "react";
import { IRouteConfig } from "../../protectedRouts/types/IRouteConfig";
import CMasterDetail from "../ui/CMasterDetail";
import SideBar from "./sideBar";

const Layout = ({ children, rList }: { children: React.ReactNode; rList: IRouteConfig[] }) => {
  rList = rList.filter((i) => i.sideBar)
  return (
    <CMasterDetail
      master={<SideBar rList={rList} />}
      detail={children}
    />
  );
};

export default Layout;