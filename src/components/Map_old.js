import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
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
import Skill from './actors/Skill';
import Bug from './actors/Bug';
import HeroCard from './HeroCard';
import {Grid} from 'semantic-ui-react';


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
          [
            <Skill name="HTML5" icon="icon-html5" devXP={1} />,
            <Skill name="CSS3" icon="icon-css3-alt" devXP={3} />,
            <Skill name="Bootstrap" icon="icon-bootstrap" devXP={5} />,
            <Skill name="Javascript" icon="icon-js" devXP={20} />,
            <Skill name="jQuery" icon="icon-jquery" devXP={10} />,
            <Bug errors={1}/>, 
            <Bug errors={3}/>, 
            <Bug errors={5}/>, 
            <Bug errors={10}/>, 
            <Bug errors={20}/>, 
          ],[
            <Skill name="Sass" icon="icon-sass" devXP={25} />,
            <Skill name="React" icon="icon-react" devXP={40} />,
            <Skill name="D3" icon="icon-d3" devXP={30} />,
            <Bug errors={65} />,
            <Bug errors={105} />,
            <Bug errors={135} />, 
          ],[
            <Skill name="NodeJS" icon="icon-nodejs" devXP={40} />,
            <Skill name="Express" icon="icon-express" devXP={40} />,
            <Skill name="Mongo" icon="icon-mongo" devXP={40} />,
            <Skill name="Git" icon="icon-git" devXP={40} />,
            <Bug errors={175} />,
            <Bug errors={215} />,
            <Bug errors={255} />, 
            <Bug errors={999} />, 
          ]],
        blueprint = MapGenerator.createBlueprint(),
        // choose an element form the non-wall places array
        nthFreeRoom = Math.floor(Math.random() * blueprint.rooms.length),
        // read the (x,y) coords from the blueprint
        actorPosition = blueprint.rooms[nthFreeRoom],
        hero = this.state.hero; // Copy the default hero object
    hero.position = { // set the calculated position coords
      y: actorPosition[0],
      x: actorPosition[1]
    }

    blueprint.map[actorPosition[0]][actorPosition[1]] = <Hero />;
    blueprint.rooms.splice(nthFreeRoom, 1);

    // initialize the given level's actors
    for (let i = 0; i < actors[(this.state.level -1)].length; i++ ){
      nthFreeRoom = Math.floor(Math.random() * blueprint.rooms.length);
      actorPosition = blueprint.rooms[nthFreeRoom];
      blueprint.map[actorPosition[0]][actorPosition[1]] = actors[(this.state.level - 1)][i];
      blueprint.rooms.splice(nthFreeRoom, 1);
    }
    
    // let map = blueprint.map.map((row, i) => {
    //   return <div className="y-row" key={i}>{row.map((col, j) => {
    //     let room = {
    //       backgroundColor: 'rgba(226, 147, 68, ' + _.random(0.5, 0.7) + ')',
    //       border: '1px solid rgba(226, 147, 68, 0.7)',
    //     },
    //       wall = {
    //         backgroundColor: '#1B1C1D',
    //       };
    //     let gridClass = (col === 1) ? 'x-col wall' : 'x-col room';
    //     return <div key={j} className={gridClass} style={(col === 1) ? wall : room}>{(typeof col === 'number') ? ' ' : col}</div>

    //   })}</div>
    // });

    let schema = [].concat.apply([],blueprint.map);
    let map = schema.map((grid, i) => {
      let room = {
          backgroundColor: 'rgba(226, 147, 68, ' + _.random(0.5, 0.7) + ')',
          border: '1px solid rgba(226, 147, 68, 0.7)',
        },
          wall = {
            backgroundColor: '#1B1C1D',
          };
        let gridClass = (grid === 1) ? 'x-col wall' : 'x-col room';
      return <div key={i} className={gridClass} style={(grid === 1) ? wall : room}>{(typeof grid === 'number') ? ' ' : grid}</div>

    })

    this.setState({
      blueprint: blueprint,
      map: map,
      hero: hero
    });
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case 37: // left
        this.move('left');
        break;
      case 38: // up
        this.move('up'); // watch for the numbers of the rows increasing from top to bottom
        break;
      case 39: // right
        this.move('right');
        break;
      case 40: // down
        this.move('down');
        break;
    }
  }

  move(direction){
    let blueprint = this.state.blueprint,
        newBlueprint = Object.assign({}, this.state.blueprint),
        hero = this.state.hero,
        newHero = Object.assign({}, this.state.hero),
        map = this.state.map,
        newMap= Object.assign({}, this.state.map);

    let room = {
      backgroundColor: 'rgba(226, 147, 68, ' + _.random(0.5, 0.7) + ')',
      border: '1px solid rgba(226, 147, 68, 0.7)',
    };


    // get where would the user move
    switch(direction){
      case 'left':
       newMap[hero.position.y * 30 + hero.position.x] = <div className="x-col room" style={room}>{' '}</div>;
        newMap[hero.position.y * 30 + hero.position.x - 1] = <div className="x-col room" style={room}><Hero/></div>;
        // if (blueprint.map[hero.position.y][hero.position.x - 1] === 0 ){
        //   newBlueprint.map[hero.position.y][hero.position.x] = 0;
        //   newBlueprint.map[hero.position.y][hero.position.x - 1] = <Hero />;
        // }
        newHero.position.x--;
      break;
      case 'right':
        if (blueprint.map[hero.position.y][hero.position.x + 1] === 0) {
          newBlueprint.map[hero.position.y][hero.position.x] = 0;
          newBlueprint.map[hero.position.y][hero.position.x + 1] = <Hero />;
          newHero.position.x++;
        }
        break;
      case 'up':
        // let content = blueprint.map[hero.position.y - 1][hero.position.x];
        let content = map[hero.position.y - 1].props.children[hero.position.x].props;
        if (content.className === 'x-col room' || typeof content.children === 'object') {
          if (typeof content.children === 'object'){
            newHero.skills.push(content.children.props);
            newHero.devXP += content.children.props.devXP
          }
          // newMap[hero.position.y].props.children[hero.position.x].props.children = " ";
          newMap[hero.position.y - 1][hero.position.x] = <Hero />;
          newHero.position.y--;
        }
        break;
      case 'down':
        if (blueprint.map[hero.position.y + 1][hero.position.x] === 0) {
          newBlueprint.map[hero.position.y][hero.position.x] = 0;
          newBlueprint.map[hero.position.y + 1][hero.position.x] = <Hero />;
          newHero.position.y++;
        }
        break;
    }
    this.setState({
      map: newMap,
      hero: newHero
    });
  }


  render(){

    
    return (
      <Grid columns={2}>
        <Grid.Column width={16} mobile={16} tablet={13} computer={10} className="labirinth">
          {this.state.map}
        </Grid.Column>
        <Grid.Column width={4}>
          <HeroCard info={this.state.hero} />
        </Grid.Column>
      </Grid>
    );
  }
}