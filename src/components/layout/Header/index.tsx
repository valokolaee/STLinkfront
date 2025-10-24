// src/components/layout/Header.tsx
import React from "react";
import Logo from "./Logo";
import TinyMenu from "./TinyMenu";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between   py-4 bg-dark border-b border-dark-gray">
      <Logo />
      <TinyMenu />
    </header>
  );
};

export default Header;