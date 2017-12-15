import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Buttons from './components/Buttons';
import ReactDOM from 'react-dom';
import { ButtonToolbar, Button } from 'react-bootstrap';


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
          rows={this.rows}
          columns={this.columns}
          selectBox = {
            (row, column) => {
          		let gridCopy = JSON.parse(JSON.stringify(this.state.table));
          		gridCopy[row][column] = !gridCopy[row][column];
          		this.setState({
          			table: gridCopy
          		});
          	}
          }
          table = {this.state.table}
        />
        <Buttons
					Start={this.Start}
					Stop={this.Stop}
				/>

      </div>
    );
  }
}

export default App;
