import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Footer from './Footer';

export default class Layout extends Component{
  render(){
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <h1 className="title">The Mysterious Labyrinth <br/>of Web Development</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>            
          {this.props.children}
        </Grid.Row>
        <Footer/>
      </Grid>
    );

  }
}