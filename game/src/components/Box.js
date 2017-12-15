import React, { Component } from 'react';
import '../App.css';

class Box extends React.Component {
	selectBox = () => {
		this.props.selectBox(this.props.row, this.props.column);
	}

	render() {
		return (
			<div
				className={this.props.boxClass}
				onClick={this.selectBox}
			/>
		);
	}
}
export default Box;
