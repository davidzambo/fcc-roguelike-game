import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

const HeroCard = (props) => {
  let skills = props.info.skills.map((skill, i) => {
    return <li key={i}><i className={skill.icon + ' list-icon'}></i>{skill.name}</li>
  });
  return (
    <Segment>
      <p>DevXP: {props.info.devXP}</p>
      <p>Menthal health: {props.info.menthalHealth}</p>
      <div className="skill-container"><span>Skills: </span>
        <ul className="skill-list">
        {skills}
        </ul>
      </div>

    </Segment>
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