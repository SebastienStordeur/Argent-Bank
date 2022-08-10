import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
