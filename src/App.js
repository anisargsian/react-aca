import React, { Component } from 'react';
import List from './List/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='conatiner'>
        <h1 className='heading'>My Schedule</h1>
        <List />
      </div>
    );
  }
}

export default App;
