import React from "react";
import CharacterCard from "./CharacterCard";
import notFound from "../images/notFound.png";
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
      <section className="section">
        {characters.length !== 0 ? (
          <ul className="list">{characters}</ul>
        ) : (
          <div className="alternative">
            <h3 className="alternative__text">Personaje no encontrado</h3>
            <img
              src={notFound}
              alt="personaje no encontrado"
              className="alternative__img"
            />
          </div>
        )}
      </section>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CharacterList;
