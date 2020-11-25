import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/_characterList.scss";
import PropTypes from "prop-types";

class CharacterList extends React.Component {
  render() {
    const characters = this.props.characters.map((character) => {
      return (
        <li key={character.id}>
          <CharacterCard character={character}></CharacterCard>
        </li>
      );
    });
    return (
      <section>
        {characters.length !== 0 ? (
          <ul className="list">{characters}</ul>
        ) : (
          <p className="notFound">Personaje no encontrado</p>
        )}
      </section>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
