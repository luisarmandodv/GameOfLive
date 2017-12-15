import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Buttons from './components/Buttons';


class App extends Component {
  constructor(){
    super();
    this.rows = 20;//quantity of rows
    this.columns = 20;//quantity of columns

    this.state = {//fill the table with dead cells (false)
      table: Array(this.rows).fill().map( () => Array(this.columns).fill(false))
    }
  }

  Start = () => {
		clearInterval(this.intervalId);//Start the game with a 0.1sec rate of interval
		this.intervalId = setInterval(this.play, 100);
	}

	Stop = () => {//Stop the interval
		clearInterval(this.intervalId);
	}
  /*
    Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    Any live cell with two or three live neighbours lives on to the next generation.
    Any live cell with more than three live neighbours dies, as if by overpopulation.
    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


    I will use this kind of structue in this code. Being "X" the cell selected
                      1 2 3
                      8 X 4
                      7 6 5
  */
  play = () => {
		let copy = JSON.parse(JSON.stringify(this.state.table));

    //This part of the code is here thanks to: https://rosettacode.org/wiki/Conway%27s_Game_of_Life#C.23
		for (let i = 0; i < this.rows; i++) {//go to every row
		  for (let j = 0; j < this.columns; j++) {//go to every column
		    let count = 0;//We need a count to know the quantity of cells alive around the actual cells
		    if (i > 0) {//isn't it on the above border?
          if (this.state.table[i - 1][j]) {//are there an alive cell at "2"?
            count++;//Add a new neighbour
          }
        }
		    if (i > 0 && j > 0) {//isn't it on the left above corner?
          if (this.state.table[i - 1][j - 1]) {//are there an alive cell at "1"?
            count++;//Add a new neighbour
          }
        }
		    if (i > 0 && j < this.columns - 1) {//isn't it on the right above corner?
          if (this.state.table[i - 1][j + 1]) {//are there an alive cell at "3"?
            count++;//Add a new neighbour
          }
        }
		    if (j < this.columns - 1) {//isn't it on the right border?
          if (this.state.table[i][j + 1]) {//are there an alive cell at "4"?
            count++;//Add a new neighbour
          }
        }
		    if (j > 0) {//isn't it on the left border?
          if (this.state.table[i][j - 1]) {//are there an alive cell at "8"?
            count++;//Add a new neighbour
          }
        }
		    if (i < this.rows - 1) {//isn't it on the below border?
          if (this.state.table[i + 1][j]) {//are there an alive cell at "6"?
            count++;//Add a new neighbour
          }
        }
		    if (i < this.rows - 1 && j > 0) {//isn't it on the left below corner?
          if (this.state.table[i + 1][j - 1]) {//are there an alive cell at "7"?
            count++;//Add a new neighbour
          }
        }
		    if (i < this.rows - 1 && this.columns - 1) {//isn't it on the right below corner?
          if (this.state.table[i + 1][j + 1]) {//are there an alive cell at "5"?
            count++;//Add a new neighbour
          }
        }
		    if (this.state.table[i][j] && (count < 2 || count > 3)) { //Any live cell with two or three live neighbours lives on to the next generation.
          copy[i][j] = false;
        }
		    if (!this.state.table[i][j] && count === 3) { //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
          copy[i][j] = true;
        }
		  }
		}
    //////////////////////////////////////////////////////////////////////////////////////////////////
		this.setState({
		  table: copy,  //Refresh new table
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
          rows={this.rows}//Send rows to table component
          columns={this.columns}//Send columns to table component
          selectBox = {
            (row, column) => {
          		let copy = this.state.table;//copy of the table
          		copy[row][column] = !copy[row][column];//change cell state
          		this.setState({
          			table: copy//Set new table, with the new state of the cell
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
