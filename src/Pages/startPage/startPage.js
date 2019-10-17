import React, { Component } from "react";
import createCard from "../../Components/createCard";
import shipLogo from "../../Assets/singleShip.png";
import gameTitle from "../../Assets/gameTitle.png";
import { Link } from "react-router-dom";
import "./startPage.css";

class startPage extends Component {
  constructor(props) {
    super(props);
    this.state = { playerTurn: 1, gameStage: "start" };
  }
  render() {
    return (
      <div className='startPage'>
        <header className='startPage-header'>
          <img src={gameTitle} alt='gameTitle' />
          <div className='ship-logo-container'>
            <img src={shipLogo} className='ship-logo' alt='ship-logo' />
          </div>
        </header>
        <Link className='start-game' to='/gamePage'>
          Start Game
        </Link>
      </div>
    );
  }
}

export default startPage;
