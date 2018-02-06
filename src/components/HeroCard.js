import React from 'react';
import PropTypes from 'prop-types';

const HeroCard = (props) => {
  let skills = props.info.skills.map((skill) => {
    return <i className={'icon-'+skill.icon}>{skill.name}</i>
  });
  return (
    <div>
      <p>Dave</p>
      <p>Position x: {props.info.position.x}</p>
      <p>Position y: {props.info.position.y}</p>
      <p>DevXP: {props.info.devXP}</p>
      <p>Skills: {skills}</p>

    </div>
  );
}

export default HeroCard

HeroCard.defaultProps = {
  info: {
    position:{
      x: 1,
      y: 1,
    },
    devXp: 1,
    skills: []
  }
}