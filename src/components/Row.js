import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

export default class Row extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cells : []
    }
  };

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('need row update');
  //   return this.props.cells !== nextProps.cells;
  // }
  
  render() {
    return (
      <tr>
        {
          this.props.cells.map((cell, index) => {
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