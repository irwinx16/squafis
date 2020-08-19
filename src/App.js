import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { StockPrice } from "./components/StockPrice";

function App() {
  return (
    <div className="container">
      <NavBar />
      <StockPrice />
    </div>
  );
}

export default App;
