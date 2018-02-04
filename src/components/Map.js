import React, {Component} from 'react';
import MapGenerator from './map-generator';
import {wall, room} from './styles.css';
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


export default class Map extends Component{
  constructor(props){
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.move = this.move.bind(this);
    this.state = {
      blueprint: [],
      level: 1,
      hero: {
        menthal_status: 100,
        devXP: 1,
        skills: [],
        position: {
          x: 0,
          y: 0,
        }
      },
    }
  }
  
  componentWillMount(){
    // add eventlister to the document to watch for the users input
    document.addEventListener("keydown", this.handleKeyDown, false);

    // define the actors of the actual level
    let actors = [
          [<Html/>, <Css />, <Bootstrap /> , <Js /> , <Jquery />],
          [<Sass />, <Reactlogo />, <D3 />],
          [<Node />, <Express />, <Mongo />, <Git />]],
        blueprint = MapGenerator.createBlueprint(),
        // choose an element form the non-wall places array
        nthFreeRoom = Math.floor(Math.random() * blueprint.rooms.length),
        // read the (x,y) coords from the blueprint
        actorPosition = blueprint.rooms[nthFreeRoom],
        map,
        hero = this.state.hero; // Copy the default hero object
    hero.position = { // set the calculated position coords
      y: actorPosition[0],
      x: actorPosition[1]
    }

    blueprint.map[actorPosition[0]][actorPosition[1]] = <Hero />;
    blueprint.rooms.splice(nthFreeRoom, 1);

    
    for (let i = 0; i < actors[(this.state.level -1)].length; i++ ){
      nthFreeRoom = Math.floor(Math.random() * blueprint.rooms.length);
      actorPosition = blueprint.rooms[nthFreeRoom];
      blueprint.map[actorPosition[0]][actorPosition[1]] = actors[(this.state.level - 1)][i];
      blueprint.rooms.splice(nthFreeRoom, 1);
    }
    
    map = blueprint.map.map((row, i) => {
      return <tr key={i}>{row.map((col, j) => {
        return <td key={j} id={'r'+i+'_c'+j} className={(col === 1) ? 'wall' : 'room'}>{ (typeof col === 'number') ? ' ' : col }</td>
      })}</tr>
    });

    this.setState({
      blueprint: blueprint,
      map: map,
      hero: hero
    });
  }

  handleKeyDown(e) {
    switch (e.target) {
      case 37: // left
        this.move([0, -1]);
        break;
      case 38: // up
        this.move([-1, 0]); // watch for the numbers of the rows increasing from top to bottom
        break;
      case 39: // right
        this.move([0,1]);
        break;
      case 40: // down
        this.move([1,0]);
        break;
    }
  }

  move(direction){

  }


  render(){
    
    
    return (
      <div>
        <table>
          <tbody>
            {this.state.map}
          </tbody>
        </table>
      </div>
    );
  }
}