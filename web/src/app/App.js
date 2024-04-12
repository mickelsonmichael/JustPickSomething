import React from "react";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import Header from "../common/Header";
import Footer from "../layout/footer";
import WheelPage from "../pages/wheel";
import ApexPage from "../pages/apex";

import "./App.css";

const App = () => (
  <div className="app">
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WheelPage />} />
        <Route path="/apex" element={<ApexPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  </div>
);

export default App;
