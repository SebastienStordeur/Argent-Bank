import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import UserPage from "./pages/UserPage";
import { authActions } from "./store/auth";
import { RootState } from "./store/index";

const App: React.FC = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (!token) return;
    const tokenCheckerHandler: () => void = () => {
      const nowTime: number = new Date().getTime();
      const storedExpirationTime: string | null =
        localStorage.getItem("expirationTime");

      if (storedExpirationTime !== null) {
        const expirationDate: number = new Date(storedExpirationTime).getTime();
        console.log(nowTime < expirationDate);
        if (nowTime > expirationDate) {
          localStorage.removeItem("token");
          localStorage.removeItem("expirationTime");
          navigate("/");
        } else dispatch(authActions.retrieveStoredToken());
      }
    };
    tokenCheckerHandler();
    /* dispatch(authActions.retrieveStoredToken()); */
  }, [dispatch, token, navigate]);

  return (
    <>
      <Header />
      <Routes>
        {!isAuthenticated && <Route path="/" element={<Homepage />} />}
        {!isAuthenticated ? (
          <Route path="/sign-in" element={<Loginpage />} />
        ) : (
          <Route path="/user" element={<UserPage />} />
        )}
        {isAuthenticated && <Route path="/user" element={<UserPage />} />}
        {isAuthenticated && (
          <Route path="*" element={<Navigate to="/user" replace />} />
        )}
        {!isAuthenticated && (
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        )}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
