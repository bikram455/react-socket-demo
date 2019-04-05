import React, { Component } from 'react';
import './App.css';

import { firstAction, secondAction, thirdAction, fourthAction } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  firstAction() {
    firstAction();
  }
  secondAction() {
    secondAction();
  }
  thirdAction() {
    thirdAction();
  }
  fourthAction() {
    fourthAction();
  }

  render() {
    return (
      <div className="App">
        <h3> An example of socket io and reactjs.</h3>
        <button onClick={this.firstAction} > Task 1 </button>
        <button onClick={this.secondAction} > Task 2 </button>
        <button onClick={this.thirdAction} > Task 3 </button>
        <button onClick={this.fourthAction} > Task 4 </button>
      </div>
    );
  }
}

export default App;
