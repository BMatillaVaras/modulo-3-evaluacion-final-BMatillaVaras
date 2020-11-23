import React from "react";
import logo from "../images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} alt="" />
      </div>
    );
  }
}

export default Header;
