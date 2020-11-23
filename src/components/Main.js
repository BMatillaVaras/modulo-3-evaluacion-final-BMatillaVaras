import React from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

class Main extends React.Component {
  render() {
    return (
      <>
        <Filters />
        <CharacterList characters={this.props.characters} />
      </>
    );
  }
}

export default Main;
