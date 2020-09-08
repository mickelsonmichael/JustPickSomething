import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Wheel from "../wheel/Wheel";
import Header from "../common/Header";

export default hot(module)(() => (
  <div className="app">
    <Header />
    <Wheel />
  </div>
));
