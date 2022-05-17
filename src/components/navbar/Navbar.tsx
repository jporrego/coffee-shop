import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { StringTouple } from "../../types";

interface NavbarProps {
  paths: {
    path: string;
    text: string;
  }[];
}
const Navbar: React.FC<NavbarProps> = ({ paths }) => {
  const renderLinks = () => {
    return paths.map((link) => <Link to={link.path}>{link.text}</Link>);
  };
  return <div className="navbar">{renderLinks()}</div>;
};

export default Navbar;
