import React from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

import { Link } from "react-router-dom";
import { RootState } from "../../store/index";

const Header: React.FC = () => {
  const isAuthenticatedState = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  console.log(isAuthenticatedState);
  return (
    <>
      {/* <header id="header" className="header"> */}
      <Navbar>
        <Link to="/" className="main-nav-logo">
          <Logo />
        </Link>

        <div>
          {!isAuthenticatedState && (
            <Link to="/sign-in" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign in
            </Link>
          )}
          {isAuthenticatedState && (
            <>
              <Link to="/somewhereelse" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Prénom
              </Link>
              <Link to="/" className="main-nav-item">
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </>
          )}
        </div>
      </Navbar>
    </>
    /* </header> */
  );
};

export default Header;
