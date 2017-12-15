import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';

class Buttons extends Component {
	render() {
		return (
			<div className="btnDiv">
				<ButtonToolbar>
          <Button className="btn" bsSize="lg" onClick={this.props.Start}>
            <p className="btnP">Start</p>
          </Button>

          <Button className="btn" bsSize="small" onClick={this.props.Stop}>
            <p className="btnP">Stop</p>
          </Button>
				</ButtonToolbar>
			</div>
			)
	}
}
export default Buttons;
