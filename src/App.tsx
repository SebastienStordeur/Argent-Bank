import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import UserPage from "./pages/UserPage";

const App: React.FC = () => {
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
