import React, { Component } from 'react';
import { Header, Container, Grid, Divider, Icon } from 'semantic-ui-react';
import Footer from './Footer';

export default class Layout extends Component{
  render(){
    return (
      <Container fluid>
        <Grid>
          <Grid.Row columns="1">
            <Grid.Column width={16}>
              <Divider horizontal/>
              <Header as="h1" textAlign="center" inverted>
                <Header.Content>
                  The Mighty Labirinth of Web Development
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {this.props.children}
          </Grid.Row>
        </Grid>
        <Grid.Row>
          <Footer />
        </Grid.Row>
      </Container>
    );

  }
}