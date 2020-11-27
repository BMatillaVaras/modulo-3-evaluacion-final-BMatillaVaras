import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/_characterCard.scss";
import PropTypes from "prop-types";

class CharacterCard extends React.Component {
  render() {
    return (
      <>
        <Link
          to={`/character-detail/${this.props.character.id}`}
          className="list__article"
          alt="ir a los detalles del personaje "
        >
          <article>
            <img
              src={this.props.character.image}
              alt={`imagen de ${this.props.character.name}`}
              title={`imagen de ${this.props.character.name}`}
              className="list__article--img"
            />
            <h3 className="list__article--title">
              {this.props.character.name}
            </h3>
            <p className="list__article--text">
              {this.props.character.species}
            </p>
            <p className="form__label">
              {this.props.character.episodes.length}
            </p>
          </article>
        </Link>
      </>
    );
  }
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
