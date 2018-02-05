import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container, Divider, Icon, Modal, Segment, Grid, Button } from 'semantic-ui-react';

export default class GameDescription extends React.Component{
  render(){
    return(
      <Modal open={this.props.showGameDescription}>
        <Grid stackable padded>
          <Grid.Row>
            <Grid.Column>
              <Header as='h1' textAlign="center">Cody needs <strong>YOU</strong> to help him become a 
              <br />super awesome web developer!</Header>
              <Divider hidden/>
              <p>One day Cody woke up in his bed with a strong motivation to become
              an awesome web developer.</p>
              <p>He looked around where he should start his new carrier, and he found an interesting quote:</p>
              <blockquote>
                <p>
                The only way to learn a new programming language is by writing programs in it.
                </p>
                <footer>-- Dennis M. Ritchie</footer>
              </blockquote>
              <p>So he took the advice of a pro, and dived deep into the endless ocean of the web development.
              Help him to get new skills and find all the bugs in the given level.</p>
              <p>Warning! Every bug has different difficulty level. By getting up new equipments to his inventory will increase the efficienty to solve problem! </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button positive content="Let's start the journey!" onClick={this.props.onClick} />
            </Grid.Column>
          </Grid.Row>
        </Grid>  
      </Modal>
    );
  }
}

GameDescription.defaultProps = {
  showGameDescription: true
}

GameDescription.propTypes = {
  showGameDescription: PropTypes.bool
}