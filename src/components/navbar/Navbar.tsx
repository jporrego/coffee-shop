import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StringTouple } from "../../types";

interface NavbarProps {
  paths: {
    path: string;
    text: string;
  }[];
  cart?: React.ReactNode;
}
const Navbar: React.FC<NavbarProps> = ({ paths, cart }) => {
  const renderLinks = () => {
    return paths.map((link) => (
      <Link key={link.path} to={link.path}>
        {link.text}
      </Link>
    ));
  };
  return (
    <div className="navbar">
      {renderLinks()}
      {cart && cart}
    </div>
  );
};

export default Navbar;