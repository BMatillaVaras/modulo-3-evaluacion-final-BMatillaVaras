import React from "react";
import "../stylesheets/_filters.scss";

class Filters extends React.Component {
  render() {
    return (
      <form action="" className="form">
        <label htmlFor="character" className="form__label">
          Personaje:
        </label>
        <input
          id="character"
          type="text"
          placeholder="Rick"
          className="form__input"
        />
      </form>
    );
  }
}

export default Filters;
