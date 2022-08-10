import React from "react";

interface NavI {
  children: React.ReactNode;
}

const Navbar: React.FC<NavI> = (props: NavI) => {
  return <nav className="main-nav">{props.children}</nav>;
};

export default Navbar;
