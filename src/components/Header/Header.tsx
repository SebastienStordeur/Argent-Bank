import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/index";
import { authActions } from "../../store/auth";
import { Link, useNavigate } from "react-router-dom";

import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const firstName = useSelector((state: RootState) => state.auth.user.displayableName?.split(" ")[0]);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/sign-in", { replace: true });
  };

  return (
    <Navbar>
      <Logo />
      <div>
        <Link to={isAuthenticated ? "/user" : "/sign-in"} className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {isAuthenticated ? firstName : "Sign in"}
        </Link>
        {isAuthenticated && (
          <Link to="/" className="main-nav-item" onClick={logoutHandler}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        )}
        {/*         {!isAuthenticated && (
          <Link to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign in
          </Link>
        )} */}
        {isAuthenticated && (
          <>
            {/*             <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link> */}
            <Link to="/" className="main-nav-item" onClick={logoutHandler}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        )}
      </div>
    </Navbar>
  );
};

export default Header;
