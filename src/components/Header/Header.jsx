import React from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  IconLogo,
  Menu,
} from "./Header.elements";
import { SiHappycow } from "react-icons/si";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <IconLogo>
            <SiHappycow size={"2.0em"} />
            Ternerito Store
          </IconLogo>
          <Menu>
          <Link to="/">Home</Link>
          </Menu>
          <Menu>
          <Link to="/products">Products</Link>
          </Menu>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
