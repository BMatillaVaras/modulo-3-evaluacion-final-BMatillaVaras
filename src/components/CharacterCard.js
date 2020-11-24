import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/_characterCard.scss";

class CharacterCard extends React.Component {
  render() {
    return (
      <>
        <Link
          to={`/character-detail/${this.props.character.id}`}
          className="list__article"
        >
          <article>
            <img
              src={this.props.character.image}
              alt={this.props.character.name}
              className="list__article--img"
            />
            <h3 className="list__article--title">
              {this.props.character.name}
            </h3>
            <p className="list__article--text">
              {this.props.character.species}
            </p>
          </article>
        </Link>
      </>
    );
  }
}

export default CharacterCard;
