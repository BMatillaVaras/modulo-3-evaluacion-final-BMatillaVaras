import React from "react";
import "../stylesheets/_filters.scss";
import PropTypes from "prop-types";

const Filters = (props) => {
  const handleFilter = (ev) => {
    const data = {
      id: ev.target.id,
      value: ev.target.value,
    };
    props.handleFilter(data);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form action="" className="form" onSubmit={handleFormSubmit}>
      <label htmlFor="character" className="form__label">
        Personaje:
      </label>
      <input
        id="character"
        type="text"
        placeholder="Rick"
        className="form__input"
        onChange={handleFilter}
        value={props.filterText}
      />
      <label htmlFor="episodes" className="form__label">
        Episodios
      </label>
      <input
        type="number"
        id="episodes"
        className="form__input"
        onChange={handleFilter}
        value={props.episodes}
      />
    </form>
  );
};

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filterText: PropTypes.string,
};

export default Filters;
