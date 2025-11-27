// src/components/layout/Layout.tsx
import React from "react";
import CMasterDetail from "../ui/CMasterDetail";
import SideBar from "./sideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CMasterDetail
      master={<SideBar />}
      detail={children}
    />



    //   <div className="flex flex-col min-h-screen bg-dark">

    //     <div className="flex-1 flex">
    //       {/* <Sidebar /> */}

    //       <main className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black flex-1   mt-16 mx-3">
    //         {children}
    //       </main>
    //     </div>

    //     {/* <MobileNav /> */}
    //   </div>
  );
};

export default Layout;