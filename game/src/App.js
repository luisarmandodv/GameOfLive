import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Buttons from './components/Buttons';


class App extends Component {
  constructor(){
    super();
    this.rows = 20;
    this.columns = 20;

    this.state = {
      table: Array(this.rows).fill().map( () => Array(this.columns).fill(false))
    }
  }

  Start = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, 100);
	}

	Stop = () => {
		clearInterval(this.intervalId);
	}

  play = () => {
		let copy = JSON.parse(JSON.stringify(this.state.table));

    //This part of the code is here thanks to: https://rosettacode.org/wiki/Conway%27s_Game_of_Life#C.23
		for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.columns; j++) {
		    let count = 0;
		    if (i > 0) {
          if (this.state.table[i - 1][j]) {
            count++;
          }
        }
		    if (i > 0 && j > 0) {
          if (this.state.table[i - 1][j - 1]) {
            count++;
          }
        }
		    if (i > 0 && j < this.columns - 1) {
          if (this.state.table[i - 1][j + 1]) {
            count++;
          }
        }
		    if (j < this.columns - 1) {
          if (this.state.table[i][j + 1]) {
            count++;
          }
        }
		    if (j > 0) {
          if (this.state.table[i][j - 1]) {
            count++;
          }
        }
		    if (i < this.rows - 1) {
          if (this.state.table[i + 1][j]) {
            count++;
          }
        }
		    if (i < this.rows - 1 && j > 0) {
          if (this.state.table[i + 1][j - 1]) {
            count++;
          }
        }
		    if (i < this.rows - 1 && this.columns - 1) {
          if (this.state.table[i + 1][j + 1]) {
            count++;
          }
        }
		    if (this.state.table[i][j] && (count < 2 || count > 3)) {
          copy[i][j] = false;
        }
		    if (!this.state.table[i][j] && count === 3) {
          copy[i][j] = true;
        }
		  }
		}
    //////////////////////////////////////////////////////////////////////////////////////////////////
		this.setState({
		  table: copy,
		});
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
          		let copy = JSON.parse(JSON.stringify(this.state.table));
          		copy[row][column] = !copy[row][column];
          		this.setState({
          			table: copy
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
