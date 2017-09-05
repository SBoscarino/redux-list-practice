import React, { Component } from 'react';
import './App.css';
import List from './list.js';
import store from './store/';

class App extends Component {
  render() {
    return (
      <div className="App">
      <List store={store}/>
      </div>
    );
  }
}

export default App;
