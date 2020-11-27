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
      <label htmlFor="species" className="form__label">
        Especie
      </label>
      <select
        name="species"
        id="species"
        onChange={handleFilter}
        value={props.species}
      >
        <option value="human">Humano</option>
        <option value="alien">Alien</option>
      </select>
    </form>
  );
};

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filterText: PropTypes.string,
};

export default Filters;
