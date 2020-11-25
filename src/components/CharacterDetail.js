import React from "react";
import { Link } from "react-router-dom";
import portal from "../images/portal.png";
import "../stylesheets/_characterDetail.scss";
import PropTypes from "prop-types";

class CharacterDetail extends React.Component {
  render() {
    const getStatus = () =>
      this.props.character.status === "Alive" ? (
        <i className="fas fa-heart"></i>
      ) : this.props.character.status === "Dead" ? (
        <i className="fas fa-skull-crossbones"></i>
      ) : (
        <i className="fas fa-question"></i>
      );

    const getSpecies = () =>
      this.props.character.species === "Human" ? (
        <i className="fas fa-user"></i>
      ) : (
        <i className="fab fa-reddit-alien"></i>
      );

    return (
      <div className="detail">
        <Link to="/" alt="volver a la Home" className="detail__return">
          <img
            src={portal}
            alt="Volver al inicio"
            className="detail__return--img"
          />
          <p className="detail__return--text">Volver al inicio</p>
        </Link>

        <article className="detail__article">
          <img
            src={this.props.character.image}
            className="detail__article--img"
            alt={`imagen de ${this.props.character.name}`}
            title={`imagen de ${this.props.character.name}`}
          />
          <div>
            <div className="detail__article--title">
              <h3>{this.props.character.name}</h3>
              <div>
                <span className="detail__article--icons">{getStatus()}</span>
                <span className="detail__article--icons">{getSpecies()}</span>
              </div>
            </div>

            <ul className="detail__article--list">
              <li className="detail__article--listItem">
                Estado: {this.props.character.status}
              </li>
              <li className="detail__article--listItem">
                Especie: {this.props.character.species}
              </li>
              <li className="detail__article--listItem">
                Origen: {this.props.character.origin}
              </li>
              <li className="detail__article--listItem">
                Episodios: {this.props.character.episodes.length}
              </li>
            </ul>
          </div>
        </article>
      </div>
    );
  }
}

CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterDetail;
