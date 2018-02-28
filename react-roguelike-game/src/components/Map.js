import React, { Component } from 'react';
import _ from 'lodash';
import Hero from './actors/Hero';
import Skill from './actors/Skill';
import Bug from './actors/Bug';
import Row from './Row';

const levelActors = [
  [
    <Hero />,
    <Skill name="HTML5" icon="icon-html5" devXP={1} />,
    <Skill name="CSS3" icon="icon-css3-alt" devXP={3} />,
    <Skill name="BootStrap" icon="icon-bootstrap" devXP={5} />,
    <Skill name="JavaScript" icon="icon-js" devXP={20} />,
    <Skill name="jQuery" icon="icon-jquery" devXP={10} />,
    <Bug errors={3} />,
    <Bug errors={5} />,
    <Bug errors={10} />,
    <Bug errors={20} />,
    <Bug errors={40} />,
  ], [
    <Hero />,
    <Skill name="Sass" icon="icon-sass" devXP={25} />,
    <Skill name="React" icon="icon-react" devXP={40} />,
    <Skill name="D3" icon="icon-d3" devXP={30} />,
    <Bug errors={65} />,
    <Bug errors={105} />,
    <Bug errors={135} />,
  ], [
    <Hero />,
    <Skill name="NodeJS" icon="icon-nodejs" devXP={40} />,
    <Skill name="Express" icon="icon-express" devXP={40} />,
    <Skill name="Mongo" icon="icon-mongodb" devXP={40} />,
    <Skill name="Git" icon="icon-git" devXP={40} />,
    <Bug errors={175} />,
    <Bug errors={215} />,
    <Bug errors={255} />,
    <Bug errors={999} boss/>,
  ]];

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.initializeMap = this.initializeMap.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleHeroMove = this.handleHeroMove.bind(this);
    this.step = this.step.bind(this);
    this.state = {
      map: [],
      actorsNumber: 0,
      actors: [],
      blueprint: {},
    }
  }

  componentWillMount(){
    document.addEventListener('keydown', this.handleKeyDown);
    let newMap = this.initializeMap();
    
    this.setState({
      blueprint: newMap.blueprint,
      map: newMap.map,
      actorsNumber: newMap.actorsNumber,
      actors: newMap.actors
    });
  }

  initializeMap(){
    let map = [...this.props.blueprint.map],
      rooms = [...this.props.blueprint.rooms],
      actors = levelActors[this.props.hero.level - 1],
      roomIndex,
      roomCoords,
      newRooms;

      
    for (let i = 0; i < actors.length; i++) {
   
      // find a random free place
      roomIndex = _.random(0, rooms.length - 1);
      // get the coords of the selected free place
      roomCoords = rooms[roomIndex];
      // put the current actor to the selected free place
      map[roomCoords[0]][roomCoords[1]] = actors[i];
      // send back the Hero's position to App.js
      if (i === 0) {
        // console.log(`Hero position sent: ${roomCoords}`);
        this.props.updateHero({ position: roomCoords });
      }
      // remove the chosen free room from the free rooms array
      if (roomIndex === rooms.length - 1)
        newRooms = rooms.slice(0, -1);
      else if (roomIndex === 0)
        newRooms = rooms.slice(1, rooms.length - 1);
      else
        newRooms = rooms.slice(0, roomIndex).concat(rooms.slice(roomIndex + 1, rooms.length - 1))
      rooms = newRooms;
    }

    return {
      blueprint: this.props.blueprint,
      map: map,
      actorsNumber: actors.length,
      actors: actors
    };
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.blueprint !== this.state.blueprint){
      let newMap = this.initializeMap();

      this.setState({
        blueprint: newMap.blueprint,
        map: newMap.map,
        actorsNumber: newMap.actorsNumber,
        actors: newMap.actors
      });
    }
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
      default:
        return false;
    }
  }

  step(direction){
    let newPos = [this.props.hero.position.y + direction[1], this.props.hero.position.x + direction[0]],
        nextStepContent = this.state.map[newPos[0]][newPos[1]],
        newMap = [...this.state.map],
        newActors = this.state.actorsNumber;
    
    if ( typeof nextStepContent === 'number' ){ 

      if (nextStepContent === 0) // we will step to an empty field
        
        newMap = this.handleHeroMove(direction);

    } else if (nextStepContent.props.hasOwnProperty('devXP')) { // we will pick up new skill

      newMap = this.handleHeroMove(direction, { skill : nextStepContent.props});
      this.props.setLog({
        color: 'blue',
        message: `Wow! You've just now learned ${nextStepContent.props.name} and increased your devXP with ${nextStepContent.props.devXP}!`
      });
      
      newActors--;
      if (newActors === 1){
        return this.handleHeroMove([0,0], { level: true });
      }
    } else { // we will debug a bug
      /** 'debug'
        * We should select a random hit power
        * If hitpower >= error, we debugged successfully
        * if hitpower < errors, we should decrease the current errors
        * and we also decrease the heros menthal status and start the regeneration counter
        * if menthal healt is under 15 (standard menthal damage), than we can't attack
        */
        // check, if we are able to figth
        if (this.props.hero.menthalHealth < 15) {
          // you can't fight
          
          this.props.setLog({
            color: 'red',
            message: `Holly Cow! This bug is really kicks you on the face! Take a break and give it another try a bit!`
          });
          newMap = this.handleHeroMove([0,0]);
          
        } else { // you can fight
          // find a random hitpower
          let debugPower = Math.ceil(_.random(1, this.props.hero.devXP / 2) * this.props.hero.menthalHealth / 100 + this.props.hero.devXP / 2);
          // send back the log message to app

          // check if its higher than the bug errors
          if (debugPower >= nextStepContent.props.errors){
            // if yes, step to next position

            this.props.setLog({
              color: 'green',
              message: `That's it! You've fixed ${debugPower} errors!`
            });

            newMap = this.handleHeroMove(direction);
            newActors--;
            if (newActors === 1)
              return this.handleHeroMove([0, 0], { level: true });
              // this.props.setLog({
              //   color: 'green',
              //   message: `You are AMAZING! You've leart a lot of new stuffs and throw out all the bugs from your code! Let's find the freeCodeCamp's base now, to claim your certification!`
              // });
            
          } else {

            // if no, 
            // decrease the remaining errors
            let newErrors = nextStepContent.props.errors - debugPower;

            this.props.setLog({
              color: 'blue',
              message: `Nice! You've fixed ${debugPower} errors, ! Only ${newErrors} errors left to eliminate this naughty bug!`
            });
            if (nextStepContent.props.hasOwnProperty('boss'))
              newMap[newPos[0]][newPos[1]] = <Bug errors={newErrors} boss/>;
            else 
              newMap[newPos[0]][newPos[1]] = <Bug errors={newErrors}/>;
            // decrease the heros menthal status || start the timer to regenerate
            this.handleHeroMove([0,0], {menthalHealth: 15}); // hero not moving anywhere
          } // end of partial debugging

        } // end of menthal healt < 15 else branch

    } // end of "what should now happen"  section

    // refresh the map
    this.setState({
      map: newMap,
      actorsNumber: newActors
    });
  } // end step

  handleHeroMove(direction, hero = {}){
    let newPos = [this.props.hero.position.y + direction[1], this.props.hero.position.x + direction[0]],
      newMap = [...this.state.map],
      heroState = hero;
    // set current position to 'room'
    newMap[this.props.hero.position.y][this.props.hero.position.x] = 0;
    // set the new hero position
    newMap[newPos[0]][newPos[1]] = <Hero />;
    // send back the new hero position
    heroState.position = newPos;
    this.props.updateHero(heroState);

    return newMap;
  }

  render() {
    const rows = this.state.map.map((cells, index) => {
        return <Row key={index} cells={cells} level={this.props.hero.level}/>
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