import React from "react";
import "./Navbar.css";
import { StringTouple } from "../../types";

interface NavbarProps {
  paths?: {
    path: string;
    text: string;
  }[];
  cart?: React.ReactNode;
}
const Navbar: React.FC<NavbarProps> = ({ paths, cart }) => {
  const renderLinks = () => {
    if (paths !== undefined) {
      return; /*paths.map((link) => (
        <Link key={link.path} to={link.path}>
          {link.text}
        </Link>
      ));*/
    }
  };
  return (
    <div className="navbar">
      <div className="navbar-content">
        <h1>CaféShop</h1>
        <div className="navbar-links">
          <a href="#" className="link">
            Home
          </a>
          <a href="#" className="link current">
            Shop
          </a>
        </div>
        {cart && cart}
      </div>
    </div>
  );
};

export default Navbar;
