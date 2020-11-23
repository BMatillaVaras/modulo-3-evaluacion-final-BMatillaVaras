import React from "react";
import logo from "../images/logo.png";
import "../stylesheets/_header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="" />
      </header>
    );
  }
}

export default Header;
