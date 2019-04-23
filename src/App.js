import React, { Component } from "react";
import createCard from "./Components/createCard";
import shipLogo from "./Assets/singleShip.png";
import gameTitle from "./Assets/gameTitle.png";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { playerTurn: 1, gameStage: "start" };
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={gameTitle} />
          <div className='ship-logo-container'>
            <img src={shipLogo} className='ship-logo' alt='ship-logo' />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
