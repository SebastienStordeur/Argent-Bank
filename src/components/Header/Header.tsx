import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header">
      <Navbar>
        <Link to="/" className="main-nav-logo">
          <Logo />
        </Link>

        <div>
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign in
          </Link>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
