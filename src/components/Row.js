import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

export default class Row extends Component {
  constructor(props){
    super(props);
    this.state = {
      cells : []
    }
  };

  componentWillMount(){
    this.setState({
      cells: this.props.cells,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps)
      this.setState({
        cells: this.props.cells,
      });
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.cells !== this.state.cells;
  }
  
  render() {
    return (
      <tr>
        {
          this.state.cells.map((cell, index) => {
            return <Cell key={index}>{cell}</Cell>;
          })
        }
      </tr>
    );

  }

}

Row.defaultProps = {
  children: '' 
}