import React from 'react';
import Layout from './Layout';
import MapGenerator from './map-generator';
import Map from './Map';
import GameDescription from './GameDescription';
import HeroCard from './HeroCard';
import Logger from './Logger';
import LevelUp from './LevelUp.js';
import Darkness from './Darkness';
import GameControls from './GameControls';
import { Header, Grid, Image} from 'semantic-ui-react';
import '../assets/styles/styles.css';

export default class App  extends React.Component{
  constructor(props) {
    super(props);
    this.initializeBlueprint = this.initializeBlueprint.bind(this);
    this.toggleGameDescription = this.toggleGameDescription.bind(this);
    this.handleHero = this.handleHero.bind(this);
    this.handleLog = this.handleLog.bind(this);
    this.handleLevelUp = this.handleLevelUp.bind(this);
    this.handleLights = this.handleLights.bind(this);
    this.handleRestart = this.handleRestart.bind(this)
    this.state = {
      showGameDescription: true,
      blueprint : {},
      hero: {
        level: 1,
        devXP: 1,
        menthalHealth: 100,
        position: {
          x: 0,
          y: 0
        },
        skills: [],
      },
      logs : [],
      levelup : false,
      isFinished: false,
      isLightUp : false
    };
  }

  componentWillMount(){
    this.initializeBlueprint();
  }

  initializeBlueprint(){
    let blueprint = MapGenerator.createBlueprint();

    this.setState({
      blueprint: blueprint,
    });
  }

  toggleGameDescription(){
    this.setState((prevState, props) => {
      return {
        showGameDescription: !prevState.showGameDescription,
      }
    });
  }

  handleHero(obj){
    // console.log(obj);
    let hero = Object.assign({}, this.state.hero);
    let isFinished = this.state.isFinished;

    hero.position.x = obj.position[1];
    hero.position.y = obj.position[0];
    // check if the hero got new skills
    if (obj.skill !== undefined){
      hero.skills.push(obj.skill);
      hero.devXP += obj.skill.devXP;
    }
    if (obj.menthalHealth !== undefined){
      hero.menthalHealth -= obj.menthalHealth
    }
    // set up the healing
    if (this.relax === undefined && hero.menthalHealth < 100)
      this.relax = setInterval(() =>{
        let hero = Object.assign({}, this.state.hero);
        hero.menthalHealth++;
        if (hero.menthalHealth === 100){
          this.relax = undefined;
          clearInterval(this.relax);
          console.log(this.relax)
        }
        this.setState({
          hero: hero,
        })
      }, 500);
    // level up!
    if (obj.level !== undefined && obj.level === true){
      // close healing timeout
      clearInterval(this.relax);
      this.relax = undefined;
      // set hero's health to max
      hero.menthalHealth = 100;

      if (hero.level === 3){ // we reached the max level
        console.log('finished');
        hero.level = 0;
        isFinished = true;
      } 
      hero.level++;
      this.setState({
        blueprint: MapGenerator.createBlueprint(),
        hero: hero,
        isFinished: isFinished,
        levelup: true,
      });
    } else {
      
      this.setState({
        hero: hero
      });
    }
  }

  handleLog(log){
    let logs = [...this.state.logs, log]
    this.setState({
      logs: logs,
    });
  }

  handleLevelUp(){
    this.setState({
      levelup: false,
    })
  }

  handleLights(){
    this.setState((prevState, props) => {return {isLightUp: !prevState.isLightUp} });
  }

  handleRestart(){
    this.setState({
      showGameDescription: false,
      blueprint: {},
      hero: {
        level: 1,
        devXP: 1,
        menthalHealth: 100,
        position: {
          x: 0,
          y: 0
        },
        skills: [],
      },
      logs: [],
      levelup: false,
      isFinished: false,
      isLightUp: false,
    });
    this.initializeBlueprint();
  }
  

  render(){
    return (
      <Layout>
        <GameDescription showGameDescription={this.state.showGameDescription} onClick={this.toggleGameDescription}/>
        
        <Grid columns={2} padded relaxed className="no-gutters">
          <Grid.Column tablet={16} computer={12} only='tablet'>
            <div className="map-container">
              <Map blueprint={this.state.blueprint}
                isLightUp={this.state.isLightUp}
                updateHero={this.handleHero}
                hero={this.state.hero}
                setLog={this.handleLog} />
              <Darkness light={this.state.isLightUp} position={this.state.hero.position} />
            </div>
            <LevelUp  open={this.state.levelup} 
                      close={this.handleLevelUp} 
                      finish={this.state.isFinished}
                      restart={this.handleRestart}/>
          </Grid.Column>
          <Grid.Column tablet={16} computer={4} only='tablet' className="no-gutters">
            <Grid columns={3} stackable stretched verticalAlign="top">
              <Grid.Column tablet={5} computer={16} className="no-gutters">
                <GameControls 
                  toggleGameDescription={this.toggleGameDescription}
                  toggleLights={this.handleLights}
                  isLightUp={this.state.isLightUp}
                  restart={this.handleRestart}/>
              </Grid.Column>
              <Grid.Column tablet={5} computer={16}>
                <HeroCard info={this.state.hero}/>
              </Grid.Column>
              <Grid.Column tablet={6} computer={16} className="no-gutters">
                <Logger logs={this.state.logs} />
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column width={16} className="only-mobile">
            <Image src='./images/sorry.jpg' centered />
            <Header as='h1' icon color="grey" inverted className="text-shadow">
              The content is available only on tablet+ devices!
            </Header>
          </Grid.Column>
        </Grid>

      </Layout>
    );
  }
}
