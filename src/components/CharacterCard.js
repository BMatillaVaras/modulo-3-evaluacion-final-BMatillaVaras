import React from "react";
import "../stylesheets/_characterCard.scss";

class CharacterCard extends React.Component {
  render() {
    return (
      <article className="list__article">
        <img
          src={this.props.character.image}
          alt=""
          className="list__article--img"
        />
        <h3 className="list__article--title">{this.props.character.name}</h3>
        <p className="list__article--text">{this.props.character.species}</p>
      </article>
    );
  }
}

export default CharacterCard;
