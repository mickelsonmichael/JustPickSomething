import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Wheel from "../wheel/Wheel";

export default hot(module)(() => (
  <div className="app">
    <h1>Welcome to WheelDecide</h1>
    <Wheel />
  </div>
));
