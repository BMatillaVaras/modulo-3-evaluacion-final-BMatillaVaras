import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/_characterDetail.scss";

import "../stylesheets/_characterCard.scss";

class CharacterDetail extends React.Component {
  render() {
    return (
      <>
        <Link to="/">
          <span className="close">X</span>
        </Link>

        <article className="list__article">
          <img
            src={this.props.character.image}
            className="list__article--img"
            alt={this.props.character.name}
          />
          <h3 className="list__article--title">{this.props.character.name}</h3>
          <ul>
            <li>Estado: {this.props.character.status}</li>
            <li>Especie: {this.props.character.species}</li>
            <li>Origen: {this.props.character.origin}</li>
            <li>Episodios: {this.props.character.episode}</li>
          </ul>
        </article>
      </>
    );
  }
}

export default CharacterDetail;
