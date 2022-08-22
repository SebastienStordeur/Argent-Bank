import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import UserPage from "./pages/UserPage";
import { authActions } from "./store/auth";

const App: React.FC = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(authActions.storedToken());
  }, [dispatch, token]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<Loginpage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
