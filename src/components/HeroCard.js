import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Progress, Divider } from 'semantic-ui-react';

const HeroCard = (props) => {
  let skills = props.info.skills.map((skill, i) => {
    return <li key={i}><i className={skill.icon + ' list-icon'}></i>{skill.name}</li>
  });
  let menthalStateColor;
  if (props.info.menthalHealth > 70)
    menthalStateColor = 'green'; 
  else if (props.info.menthalHealt > 45)
    menthalStateColor = 'teal';
  else if (props.info.menthalHealth > 15)
    menthalStateColor = 'orange'; 
  else
    menthalStateColor = 'red';

  let devXPPercent = Math.ceil(props.info.devXP / 294 * 100)
  return (
    <Segment>
      <Progress percent={props.info.menthalHealth} progress color={menthalStateColor}>Menthal Health</Progress>
      <Divider horizontal />
      <Progress percent={devXPPercent} color='blue'>Developer Experience: {props.info.devXP}</Progress>
      <Divider horizontal />
      <p style={{marginBottom: 0}}><strong>Skills: </strong></p>
      <ul className="skill-list">
        {skills}
      </ul>
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