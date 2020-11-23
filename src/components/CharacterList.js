import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/_characterList.scss";

class CharacterList extends React.Component {
  render() {
    const characters = this.props.characters.map((character) => {
      return (
        <li key={character.id}>
          <CharacterCard character={character}></CharacterCard>
        </li>
      );
    });
    return <ul className="list">{characters}</ul>;
  }
}

export default CharacterList;
