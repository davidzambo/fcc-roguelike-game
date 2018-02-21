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

import Row from './Row';
import Cell from './Cell';
import { Grid } from 'semantic-ui-react';


export default class Map extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.step = this.step.bind(this);
    this.state = {
      map: []
    }
  }

  componentWillMount(){
    let map = [...this.props.blueprint.map],
        rooms = [...this.props.blueprint.rooms],
        actors = [...this.props.actors],
        roomIndex,
        roomCoords,
        newRooms;

    actors.map((actor) => {
      // find a random free place
      roomIndex = _.random(0,rooms.length - 1);
      // get the coords of the selected free place
      roomCoords = rooms[roomIndex];
      // put the current actor to the selected free place
      map[roomCoords[0]][roomCoords[1]] = actor;
      // send back the Hero's position to App.js
      if ( actor.type.displayName === 'Hero'){
        // console.log(`Hero position sent: ${roomCoords}`);
        this.props.setHeroPosition(roomCoords);
      }
      // remove the chosen free room from the free rooms array
      if (roomIndex === rooms.length - 1)
        newRooms = rooms.slice(0,-1);
      else if (roomIndex === 0)
        newRooms = rooms.slice(1,rooms.length - 1);
      else
        newRooms = rooms.slice(0,roomIndex).concat(rooms.slice(roomIndex+1,rooms.length-1))
      rooms = newRooms;
    });

    document.addEventListener('keydown', this.handleKeyDown);

    this.setState({
      map: map
    });
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case 37: // left
        this.step([-1,0]);
        break;
      case 38: // up
        this.step([0,-1]);
        break;
      case 39: // right
        this.step([1,0]);
        break;
      case 40: // down
        this.step([0,1]);
        break;
    }
  }

  step(direction){
    let newPos = [this.props.hero.position.y + direction[1], this.props.hero.position.x + direction[0]],
        newMap;
    
    if (this.state.map[newPos[0]][newPos[1]] === 0){
      // alert('valid');
      // copy the map
      newMap = [...this.state.map];
      // set current position to room
      newMap[this.props.hero.position.y][this.props.hero.position.x] = 0;
      // set the new hero position
      newMap[newPos[0]][newPos[1]] = <Hero />;
      // send back the new hero position
      this.props.setHeroPosition(newPos);
      this.setState({
        map: newMap
      });
    }
  }

  render() {
    const rows = this.state.map.map((cells, index) => {
        return <Row key={index} cells={cells}/>
    });
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}