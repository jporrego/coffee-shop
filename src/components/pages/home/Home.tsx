import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar paths={[{ path: "/shop", text: "shop" }]}></Navbar>
    </div>
  );
};

export default Home;
