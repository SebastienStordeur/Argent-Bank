import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header id="header" className="header">
      <Navbar>
        <Logo />
      </Navbar>
    </header>
  );
};

export default Header;
