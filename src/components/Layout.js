import React, { Component } from 'react';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

export default class Layout extends Component{
  render(){
    return (
      <Container fluid>
        <Header as="h1" textAlign="center">The Amazing Journey of David</Header>
        <Header as="h2" textAlign="center">(to become an awesome full stack web developer)</Header>
        <Header as="h5" textAlign="center">a Roguelike Dungeon Crawler Game</Header>
        {this.props.children}
      </Container>
    );

  }
}