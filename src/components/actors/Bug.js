import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react'

export default class Bug  extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      errors: 0
    }
  }

  componentWillMount(){
    this.setState({
      errors: this.props.errors
    });
  }

  render(){
    const popupContent = <p>Remaining errors: {this.state.errors + ' ' +  ((this.state.errors === 1) ? ' error' : ' errors'  )} <br/>Headache: max. 15 menthal damage/round</p>;
    return (
      <Popup
        trigger={<Icon name="bug" color="brown"/>}
        content={popupContent}
        wide
        position="top center"
      />
    );
  }
};

Bug.defaultProps = {
  errors: 0
}

Bug.propTypes = {
  errors: PropTypes.number
}