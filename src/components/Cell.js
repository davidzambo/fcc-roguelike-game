import React from 'react';
import PropTypes from 'prop-types';

export default class Cell extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      style: ''
    };
  }

  componentWillMount(){
    const room = {
      backgroundColor:  'rgba(226, 147, 68, ' + _.random(0.5, 0.7) + ')',
      border:           '1px solid rgba(226, 147, 68, 0.7)',
      minWidth:         25,
      minHeight:        25,
      margin:           'auto',
      textAlign:        'center',
      verticalAlign:    'top',
      display:          'inline-block',
      position:         'relative'
    };
    const wall = {
      backgroundColor: '#1B1C1D',
      minWidth:         25,
      minHeight:        25,
      margin:           'auto',
      textAlign:        'center',
      verticalAlign:    'top',
      display:          'inline-block',
      position:         'relative'
    };
    
    this.setState({
      style: (this.props.children === 1) ? wall : room,
      content: this.props.children
    });
        
  }

  render(){
    return(
      <div style={this.state.style}>
        
      </div>
    )
  }
}


Cell.defaultProps = {
  children: ''
}