import React from "react";
import CharacterCard from "./CharacterCard";

class CharacterList extends React.Component {
  render() {
    const characters = this.props.characters.map((character) => {
      return (
        <li key={character.id}>
          <CharacterCard character={character}></CharacterCard>
        </li>
      );
    });
    return <ul>{characters}</ul>;
  }
}

export default CharacterList;
