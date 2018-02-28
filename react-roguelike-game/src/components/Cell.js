import React from 'react';
import _ from 'lodash';

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
      border: '1px solid rgb(226, 147, 68)',
    };
    const wall = {
      backgroundColor: '#1B1C1D',
      border: '1px solid #1B1C1D',
    };
    
    this.setState({
      room: room,
      wall: wall,
      style: (this.props.children === 1) ? wall : room,
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      style: (nextProps.children === 1) ? this.state.wall : this.state.room,
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