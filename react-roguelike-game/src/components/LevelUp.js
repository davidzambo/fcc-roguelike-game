import React, { Component } from 'react';
import { Button, Modal, Header, Grid, Image } from 'semantic-ui-react';
import Cup from '../assets/images/cup.png'

export default class LevelUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
  }

  componentWillMount(){
    this.setState({ open: this.props.open });    
  }

  componentWillReceiveProps(nextProps){
    this.setState({ open: nextProps.open });
  }

  render() {
    let question,
        buttonColor,
        buttonText,
        buttonAction,
        headerText;

    if (this.props.finish){
      headerText = 'the journey';
      question = 'Do you want to restart the game?';
      buttonColor = 'red';
      buttonText = "Sure! Let's play again!";
      buttonAction = this.props.restart;
    } else {
      headerText = 'this level';
      question = 'Are you ready for the next challange?';
      buttonColor = 'green';
      buttonText = "I'm In! Let's do it!";
      buttonAction = this.props.close;      
    }
    return (
      <div>

        <Modal size='small' open={this.state.open} onClose={buttonAction} dimmer="blurring">
          <Modal.Header>
            <Header as="h1" textAlign="center">Congratulation! You've completed {headerText}!</Header>
          </Modal.Header>
          <Modal.Content image>
            <Grid>
              <Grid.Column width={6}>
                <Image src={Cup} />
              </Grid.Column>
              <Grid.Column width={10}>
                <Modal.Description>
                  <p>You've learnt a lot of <strong>new stuffs</strong> and successfully eliminated <strong>all the bugs</strong> from your code!</p>
                  <p><em><small>(By the way, who was the bastard, who put them into it? :) )</small></em></p>
                  <p>{question}</p>
                </Modal.Description>
              </Grid.Column>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button color={buttonColor} icon='checkmark' labelPosition='left' content={buttonText} onClick={buttonAction}/>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}