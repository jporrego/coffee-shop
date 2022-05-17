import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home/Home";
import Shop from "./components/pages/shop/Shop";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="shop" element={<Shop></Shop>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
