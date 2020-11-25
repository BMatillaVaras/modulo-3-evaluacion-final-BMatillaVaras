import React from "react";
import logo from "../images/logo.png";
import "../stylesheets/_header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img
          src={logo}
          alt="logo de la serie Rick and Morty"
          title="logo de la serie Rick and Morty"
          className="header__img"
        />
      </header>
    );
  }
}

export default Header;
