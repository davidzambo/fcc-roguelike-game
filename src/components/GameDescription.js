import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container, Divider, Icon, Modal, Segment, Grid, Button, Image } from 'semantic-ui-react';
import Skill from './actors/Skill';
import Bug from './actors/Bug';

export default class GameDescription extends React.Component{
  render(){
    return(
      <Modal open={this.props.showGameDescription} closeOnDimmerClick closeOnDocumentClick dimmer="blurring">
        <Grid stackable padded>
          <Grid.Row>
            <Grid.Column>
              <Header as='h1' textAlign="center" icon>
                <Icon name="user circle" color='red'/>
                <Header.Content>
                  Mr. Callback needs you to help him become a 
              <br />super awesome web developer!
                </Header.Content>
              </Header>
              <Divider horizontal/>
              <Grid>
                <Grid.Column width={4}>
                  <Image src='/public/images/hero.png' fluid centered/>
                </Grid.Column>
                <Grid.Column width={12}>
                  <p>One day Mr. Callback woke up in his bed with a strong motivation to become
              an awesome web developer.</p>
                  <p>He looked around where he should start his new carrier, and he found an interesting quote:</p>
                  <blockquote>
                    <p>
                      <em>The only way to learn a new programming language is by writing programs in it.</em>
                    </p>
                    <footer><strong> Dennis M. Ritchie</strong></footer>
                  </blockquote>
                  <p>So he took the advice of a pro, and dived deep into the endless ocean of the web development.</p>
                </Grid.Column>
              </Grid>

              <Grid>
                <Grid.Column width={16}>
                  <p>Help him to get new skills like <Skill name="HTML5" icon="icon-html5 list-icon" devXP={1} />, <Skill name="React" icon="icon-react list-icon" devXP={40} /> or <Skill name="Git" icon="icon-git list-icon" devXP={40} />to increase Mr. Callback's <strong>Developer Experience</strong> and find all the bugs in the given level's code.</p>
                  <p>If you feel lost, just turn on the <Icon name="lightbulb" color='orange' size="large"/>!</p>
                  <p><strong>Warning!!!</strong> Every <Bug errors={42} /> produce different amount of errors. If you hover a bug, you can get more details.</p>
                  <p>As in real life, debugging can cause temporary <strong><em>menthal damages</em></strong>! Take care of your menthal health! You can be the best developer of the world, if you @Overload your brain, 
                    you will be less efficient in killing those little bastards.</p>
                  <p>
                    It's always a good idea to learn new stuffs to become better! Knowledge is POWER! ;)
                  </p>

                  <p>
                    Are you ready for the journey?
                  </p>
                </Grid.Column>
              </Grid>
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