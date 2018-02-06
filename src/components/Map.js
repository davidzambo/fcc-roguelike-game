import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import MapGenerator from './map-generator';
import { wall, room } from './styles.css';
import Hero from './actors/Hero';
import Html from './actors/Html';
import Css from './actors/Css';
import Bootstrap from './actors/Bootstrap';
import Js from './actors/Js';
import Jquery from './actors/jQuery';
import Sass from './actors/Sass';
import Reactlogo from './actors/Reactlogo';
import D3 from './actors/D3';
import Node from './actors/Node';
import Express from './actors/Express';
import Mongo from './actors/Mongo';
import Git from './actors/Git';
import Skill from './actors/Skill';
import Bug from './actors/Bug';
import HeroCard from './HeroCard';
import Row from './Row';
import Cell from './Cell';
import { Grid } from 'semantic-ui-react';


export default class Map extends Component {
  constructor(props) {
    super(props);
  }


  // handleKeyDown(e) {
  //   switch (e.keyCode) {
  //     case 37: // left
  //       break;
  //     case 38: // up
  //       break;
  //     case 39: // right
  //       break;
  //     case 40: // down
  //       break;
  //   }
  // }

  render() {
    const rows = this.props.blueprint.map.map((cells, index) => {
        return <Row key={index} cells={cells}/>
    });
    return (
      <Grid columns={2}>
        <Grid.Column width={16} mobile={16} tablet={13} computer={10} className="labirinth">
          {rows}
        </Grid.Column>
        <Grid.Column width={4}>
          <HeroCard />
        </Grid.Column>
      </Grid>
    );
  }
}