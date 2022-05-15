import { constants } from "http2";
import React from "react";
import "./App.css";
import Shop from "./components/pages/Shop";

const App: React.FC = () => {
  return (
    <div className="app">
      <Shop></Shop>
    </div>
  );
};

export default App;
