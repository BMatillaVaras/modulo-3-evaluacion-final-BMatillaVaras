import React from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

const Main = (props) => {
  return (
    <>
      <Filters
        handleFilter={props.handleFilter}
        filterText={props.filterText}
      />
      <CharacterList characters={props.characters} />
    </>
  );
};

export default Main;
