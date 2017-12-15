import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';


class App extends Component {
  constructor(){
    super();
    this.rows = 20;
    this.columns = 20;

    this.state = {
      table: Array(this.rows).fill().map(() => Array(this.columns).fill(false))
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Game of Life</h1>
          <h2>by: Armando Duran</h2>
        </header>
        <Table
          table = {this.state.table}
          rows={this.rows}
          columns={this.columns}
          selectBox = {this.selectBox}
        />
      </div>
    );
  }
}

export default App;
