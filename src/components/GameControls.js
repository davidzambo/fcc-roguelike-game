import React from 'react';
import { Segment, Button, Divider, Checkbox, Icon } from 'semantic-ui-react';


export default class GameControls extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      lampColor: 'orange'
    }
  }

  componentWillMount(){
    this.setState({
      lampColor: this.props.isLightUp ? 'orange' : 'grey'
    })
  }

  componentWillReceiveProps(nextProps, nextState){
    this.setState({
      lampColor: nextProps.isLightUp ? 'orange' : 'grey'
    })
  }

  render() {
    return (
      <Segment textAlign="center">
        <Button fluid color="blue" onClick={this.props.toggleGameDescription}>Show Instructions</Button>
        <Divider horizontal/>
        <Icon color={this.state.lampColor} style={{cursor: 'pointer'}} name='lightbulb' size="huge" onClick={this.props.toggleLights}/>
        <Divider horizontal />
        <Button fluid color="red" onClick={this.props.restart}>Restart Game</Button>
      </Segment>
    );
  }
}
