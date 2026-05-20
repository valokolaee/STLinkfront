// src/components/layout/Layout.tsx
import React from "react";
import CMasterDetail from "../ui/CMasterDetail";
import SideBar, { IRout } from "./sideBar";

const Layout = ({ children,rList }: { children: React.ReactNode;rList:IRout[] }) => {
  return (
    <CMasterDetail
      master={<SideBar  rList={rList}/>}
      detail={children}
    />
  );
};

export default Layout;