import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react'

export default class Bug  extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  render(){
    const popupContent = <p>Remaining errors: {this.props.errors + ' ' + ((this.props.errors === 1) ? ' error' : ' errors'  )}</p>;
    const boss = (this.props.hasOwnProperty('boss')) ? 'boss' : 'bug';
    return (
      <Popup
        trigger={<Icon name="bug" color="brown" className={boss}/>}
        content={popupContent}
        wide
        hoverable
        open={this.props.isOpen}
        position="top center"
        style={{opacity: 0.8}}
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