import React from 'react';
import Layout from './Layout';
import MapGenerator from './map-generator';
import Map from './Map';
import Hero from './actors/Hero';
import GameDescription from './GameDescription';
import Skill from './actors/Skill';
import Bug from './actors/Bug';
import { Header, Container, Divider, Icon, Modal } from 'semantic-ui-react';

const actors = [
  [
    <Skill name="HTML5" icon="icon-html5" devXP={1} />,
    <Skill name="CSS3" icon="icon-css3-alt" devXP={3} />,
    <Skill name="Bootstrap" icon="icon-bootstrap" devXP={5} />,
    <Skill name="Javascript" icon="icon-js" devXP={20} />,
    <Skill name="jQuery" icon="icon-jquery" devXP={10} />,
    <Bug errors={1} />,
    <Bug errors={3} />,
    <Bug errors={5} />,
    <Bug errors={10} />,
    <Bug errors={20} />,
  ], [
    <Skill name="Sass" icon="icon-sass" devXP={25} />,
    <Skill name="React" icon="icon-react" devXP={40} />,
    <Skill name="D3" icon="icon-d3" devXP={30} />,
    <Bug errors={65} />,
    <Bug errors={105} />,
    <Bug errors={135} />,
  ], [
    <Skill name="NodeJS" icon="icon-nodejs" devXP={40} />,
    <Skill name="Express" icon="icon-express" devXP={40} />,
    <Skill name="Mongo" icon="icon-mongo" devXP={40} />,
    <Skill name="Git" icon="icon-git" devXP={40} />,
    <Bug errors={175} />,
    <Bug errors={215} />,
    <Bug errors={255} />,
    <Bug errors={999} />,
  ]];

export default class App  extends React.Component{
  constructor(props) {
    super(props);
    this.toggleGameDescription = this.toggleGameDescription.bind(this);
    this.state = {
      showGameDescription: true,
      hero: {
        level: 1,
        devXP: 1,
        skills: [],
      },
    };
  }

  componentWillMount(){
    // add eventlister to the document to watch for the users input
    // document.addEventListener("keydown", this.handleKeyDown, false);
    let blueprint = MapGenerator.createBlueprint();
    this.setState({
      blueprint: blueprint
    });
  }

  toggleGameDescription(){
    this.setState((prevState, props) => {
      return {
        showGameDescription: !prevState.showGameDescription,
      }
    });
  }
  

  render(){ 
    return (
      <Layout>
        <GameDescription showGameDescription={this.state.showGameDescription} onClick={this.toggleGameDescription}/>
        <Map blueprint={this.state.blueprint} actors={actors[this.state.hero.level - 1]} />
      </Layout>
    );
  }
}
