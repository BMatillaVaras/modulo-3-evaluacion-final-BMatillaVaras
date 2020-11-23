import React from "react";

class CharacterCard extends React.Component {
  render() {
    return (
      <article>
        <img src={this.props.character.image} alt="" />
        <h3>{this.props.character.name}</h3>
        <p>{this.props.character.species}</p>
      </article>
    );
  }
}

export default CharacterCard;
