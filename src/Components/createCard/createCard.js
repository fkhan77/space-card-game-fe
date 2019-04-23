import React, { Component } from "react";
import "./createCard.css";

class CreateCard extends Component {
  render() {
    return <div className={`card ${this.props.cardType}`}>Test Card</div>;
  }
}

export default CreateCard;
