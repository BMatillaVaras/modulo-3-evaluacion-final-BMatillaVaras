import React from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import PropTypes from "prop-types";

const Main = (props) => {
  return (
    <>
      <Filters
        handleFilter={props.handleFilter}
        filterText={props.filterText}
        species={props.species}
      />
      <CharacterList characters={props.characters} />
    </>
  );
};

Main.propTypes = {
  characters: PropTypes.array.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filterText: PropTypes.string,
};

export default Main;
