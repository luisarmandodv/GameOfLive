import React, { Component } from 'react';
import '../App.css';
import Box from './Box';

class Table extends Component {
  render(){
    const width = (this.props.columns * 27);//Size of the table
		var rowsArr = [];//array where stores every box of the table

		var boxClass = "";
		for (var i = 0; i < this.props.rows; i++) {//Navigate between all the positions
			for (var j = 0; j < this.props.columns; j++) {

				boxClass = this.props.table[i][j] ? "box on" : "box off";//Classes of the boxes
				rowsArr.push(//push HTML code in the array
					<Box
						boxClass={boxClass}//Set the class to the Box component
						row={i}//Define its row position
						column={j}//Define its column position
						selectBox={this.props.selectBox}//What to do if the Cell is selected
					/>
				);
			}
		}
    return(
      <div className="table" style={{width: width}}>
        {rowsArr}//show all boxes
      </div>
    );
  }
}
export default Table;
