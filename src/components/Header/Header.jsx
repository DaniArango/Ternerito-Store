import React, { useContext } from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  IconLogo,
  Menu,
} from "./Header.elements";
import { SiHappycow } from "react-icons/si";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logout();
    navigate("/");
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

            {token ? (
              <>
                <Menu onClick={onLogout}>
                <Link to="/logout">Logout</Link>
                </Menu>
              </>
            ) : (
              <>
                <Menu>
                <Link to="/login">Login</Link>
                </Menu>
              </>
            )}
          </HeaderWrapper>
        </HeaderContainer>
      </>
    );
  };
};

export default Header;
