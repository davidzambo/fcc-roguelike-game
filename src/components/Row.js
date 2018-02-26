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
  componentWillMount(){
    this.setState({
      cells: this.props.cells
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      cells: nextProps.cells
    })
  }

  
  render() {
    return (
      <tr>
        {
          this.state.cells.map((cell, index) => {
            return <Cell key={index} level={this.props.level}>{cell}</Cell>;
          })
        }
      </tr>
    );

  }

}

Row.defaultProps = {
  children: '' 
}