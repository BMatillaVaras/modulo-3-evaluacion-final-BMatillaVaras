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
        <ul>
          <li>Estado: {this.props.character.status}</li>
          <li>Especie: {this.props.character.species}</li>
          <li>Origen: {this.props.character.origin}</li>
          <li>Episodios: {this.props.character.episode}</li>
        </ul>
      </article>
    );
  }
}

export default CharacterCard;
