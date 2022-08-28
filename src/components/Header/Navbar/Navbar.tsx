import React from "react";

interface NavI {
  children: React.ReactNode;
}

const Navbar: React.FC<NavI> = (props) => {
  return <nav className="main-nav">{props.children}</nav>;
};

export default Navbar;
