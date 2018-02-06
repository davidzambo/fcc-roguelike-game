import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

const Row = (props) => {
  
  const style = {
    padding: 0,
    margin: 0,
    display: 'block',
    lineHeight: 25,
    height: 25
  }

  let cells = props.cells.map((cell, index) => {
    return <Cell key={index}>{cell}</Cell>;
  });

  return (
    <div style={style}>
      {cells}
    </div>
  );
}

export default Row;

Row.defaultProps = {
  children: '' 
}