import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

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

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {

    return (
      <div>

        <Modal size='tiny' open={this.state.open} onClose={this.props.close}>
          <Modal.Header>
            <h1>Congratulation! You've completed this level!</h1>
          </Modal.Header>
          <Modal.Content>
            <p>You've learnt a lot of <strong>new stuffs</strong> and successfully eliminated <strong>all the bugs</strong>! <br/><small>... you wrote... :)</small></p>
            <p>Are you ready for the next challange?</p>
          </Modal.Content>
          <Modal.Actions textAlign="center">
            <Button positive icon='checkmark' labelPosition='left' content="I'm in, let's do it" />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}