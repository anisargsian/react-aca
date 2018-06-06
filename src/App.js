import React, { Component } from 'react';
import UsersTable from './StudentsTable/StudentsTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <UsersTable className="App table" />
      </div>
    );
  }
}

export default App;
