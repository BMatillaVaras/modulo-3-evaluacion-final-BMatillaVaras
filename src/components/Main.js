import React from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

const Main = (props) => {
  return (
    <main>
      <Filters
        handleFilter={props.handleFilter}
        filterText={props.filterText}
      />
      <CharacterList characters={props.characters} />
    </main>
  );
};

export default Main;
