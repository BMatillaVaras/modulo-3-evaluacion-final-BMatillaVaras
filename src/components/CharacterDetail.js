import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/_characterDetail.scss";

import "../stylesheets/_characterCard.scss";

class CharacterDetail extends React.Component {
  render() {
    const getStatus = () =>
      this.props.character.status === "Alive" ? (
        <i class="fas fa-heart"></i>
      ) : this.props.character.status === "Dead" ? (
        <i class="fas fa-skull-crossbones"></i>
      ) : (
        <i class="fas fa-question"></i>
      );

    const getSpecies = () =>
      this.props.character.species === "Human" ? (
        <i class="fas fa-user"></i>
      ) : (
        <i class="fab fa-reddit-alien"></i>
      );

    return (
      <>
        <Link to="/" alt="volver a la Home">
          <span className="close">X</span>
        </Link>

        <article className="list__article">
          <img
            src={this.props.character.image}
            className="list__article--img"
            alt={`imagen de ${this.props.character.name}`}
            title={`imagen de ${this.props.character.name}`}
          />
          <h3 className="list__article--title">{this.props.character.name}</h3>
          <span>{getStatus()}</span>
          <span>{getSpecies()}</span>
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
