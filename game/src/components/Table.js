import React, { Component } from 'react';
import '../App.css';
import Box from './Box';

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
export default Table;
