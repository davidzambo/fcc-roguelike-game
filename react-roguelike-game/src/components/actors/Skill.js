import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';



export default class Skill extends React.Component{
  render(){

    const popupContent = <p>{this.props.name}: + {this.props.devXP} devXP</p>;

    return (
      <Popup
        trigger={<i className={this.props.icon}></i>}
        content={popupContent}
        position="top center"
        style={{ opacity: 0.8 }}
      />
    );
  };
}

Skill.defaultProps = {
  name: 'Skill',
  icon: 'icon-shell-alt',
  devXP: 0
}

Skill.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  devXP: PropTypes.number  
}
