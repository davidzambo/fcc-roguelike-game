import React from 'react';
import Layout from './Layout';
import Map from './Map';
import Hero from './actors/Hero';
import GameDescription from './GameDescription';
import { Header, Container, Divider, Icon, Modal } from 'semantic-ui-react';

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
        <Map/ >
      </Layout>
    );
  }
}
