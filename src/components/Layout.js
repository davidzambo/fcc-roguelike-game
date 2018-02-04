import React, { Component } from 'react';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

export default class Layout extends Component{
  render(){
    return (
      <Container fluid>
        <Header as="h1" textAlign="center">Roguelike Dungeon Crawler Game</Header>
        {this.props.children}
        <Icon name="heart" color="red" />
      </Container>
    );

  }
}