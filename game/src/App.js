import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

class Table extends Component {
  render(){
    const width = (this.props.columns * 27);
		var rowsArr = [];

		var boxClass = "";
		for (var i = 0; i < this.props.rows; i++) {
			for (var j = 0; j < this.props.columns; j++) {

				boxClass = this.props.table[i][j] ? "box on" : "box off";
				rowsArr.push(
					<Box
						boxClass={boxClass}
						boxPosition={i + "-" + j}
						row={i}
						column={j}
						selectBox={this.props.selectBox}
					/>
				);
			}
		}
    return(
      <div className="table" style={{width: width}}>
        {rowsArr}
      </div>
    );
  }
}

class Box extends React.Component {
	selectBox = () => {
		this.props.selectBox(this.props.row, this.props.column);
	}

	render() {
		return (
			<div
				className={this.props.boxClass}
				id={this.props.id}
				onClick={this.selectBox}
			/>
		);
	}
}

export default App;
