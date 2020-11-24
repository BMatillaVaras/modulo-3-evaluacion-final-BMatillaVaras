import React from "react";
import "../stylesheets/_filters.scss";

const Filters = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

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
        onChange={handleFilter}
        onSubmit={handleFormSubmit}
        value={props.filterText}
      />
    </form>
  );
};

export default Filters;
