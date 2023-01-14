import React from "react";
import {IconLogo} from "./Header.elements";
import { SiHappycow } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {
  return (
    <>
      <div className="headercontainer">
        <div className="nav">
          <IconLogo className="logo">
            <SiHappycow size={"2.0em"} />
            Ternerito Store
          </IconLogo>
          
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          
        </div>
      </div>
    </>
  );
};

export default Header;
