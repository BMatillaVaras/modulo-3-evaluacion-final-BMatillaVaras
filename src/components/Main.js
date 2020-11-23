import React from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Filters />
        <CharacterList characters={this.props.characters} />
      </main>
    );
  }
}

export default Main;
