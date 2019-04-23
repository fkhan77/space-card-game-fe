import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import startPage from "./Pages/startPage";
import gamePage from "./Pages/gamePage";
import endGamePage from "./Pages/endGamePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      // Might change this to use conditional rendering using state instead of a router
      <Router>
        <div>
          <div className='App'>
            <Route path='/' exact component={startPage} />
            <Route path='/gamePage/' component={gamePage} />
            <Route path='/endGamePage/' component={endGamePage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
