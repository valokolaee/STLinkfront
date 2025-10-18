// src/components/layout/Header.tsx
import React from "react";
import Logging from "./Logging";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-dark border-b border-dark-gray">
      <Logo />
      <Logging />
    </header>
  );
};

export default Header;