import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react'

export default class Bug  extends React.PureComponent{
  constructor(props){
    super(props);
  }

  render(){
    const popupContent = <p>Remaining errors: {this.props.errors + ' ' + ((this.props.errors === 1) ? ' error' : ' errors'  )} <br/>Headache: max. 15 menthal damage/round</p>;
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