import React from 'react';
import PropTypes from 'prop-types';



export default class Cell extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      style: {}
    };
  }

  componentWillMount(){
    const room = {
      backgroundColor: 'rgba(226, 147, 68, ' + _.random(0.3, 0.7) + ')',
      border: '1px solid rgba(226, 147, 68, 0.7)',
    };
    const wall = {
      backgroundColor: '#1B1C1D',
      border: '1px solid #1B1C1D',
    };
    
    this.setState({
      style: (this.props.children === 1) ? wall : room,
    });        
  }

  render(){
    const content = (typeof this.props.children === 'object') ? this.props.children : '';
    return(
      <td style={this.state.style}>
        { content }
      </td>
    )
  }
}


Cell.defaultProps = {
  children: 0
}