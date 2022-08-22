import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store/index";
import { authActions } from "../../store/auth";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticatedState = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const firstName = useSelector(
    (state: RootState) => state.auth.user.displayableName?.split(" ")[0]
  );

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/sign-in", { replace: true });
  };

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
                {firstName}
              </Link>
              <Link to="/" className="main-nav-item" onClick={logoutHandler}>
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
