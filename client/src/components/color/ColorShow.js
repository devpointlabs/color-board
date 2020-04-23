import React, { Component } from 'react';
import { ColorConsumer } from '../../providers/ColorProvider';
import ColorForm from '../shared/ColorForm';
import { Button, Icon } from 'react-materialize';
import ConnectedCopyPaste from '../shared/Clipboard';
import { AuthConsumer } from '../../providers/AuthProvider';

class ColorShow extends Component {
  state = { showForm: false }
  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  updateColor = () => {
    const { showForm } = this.state;
    return (
     <>
      {
        showForm ? 
        <div style={{
          width: '100%',
          textAlign: 'left',
          margin: 'auto',
        }}>
        <ColorForm color={this.props.location.state.color} toggleForm={this.toggleForm} />
          </div>
        :
        <Button onClick={() => this.toggleForm()}>
          Edit
        </Button>
      }
     </>
    )
  }

  render() {
    const { board_id, colorName, id } = this.props.location.state.color
      return(
        <>
        <div style={{
          width: '100%',
          margin: '150px',
        }}>
          <div style={{
          margin: 'auto',
          }}>
        </div>
        <div>
          <h1>Color Details</h1>

            <h2>{colorName}</h2>
            <div style={{
              backgroundColor: `${colorName}`,
              height: '100px',
              width: '50%',
            }}>
            </div>
            {
              this.props.location.state.boardUser === this.props.user.id ?
              <>
                {this.updateColor()}
                <Button onClick={() => this.props.deleteColor(board_id, id)}>
                  Delete
                </Button>
              </>
              :
              <>
              </>
            }
           <ConnectedCopyPaste colorName={colorName} />
         </div>
        </div>
        </>
      
      )
  }
}

  
const ColorColorShow = (props) => (
  <ColorConsumer> 
    {
      value =>
      <ColorShow {...props} {...value} />
    }
  </ColorConsumer>
)

const ConnectedColorShow = (props) => (
  <AuthConsumer> 
    {
      value =>
      <ColorColorShow {...props} {...value} />
    }
  </AuthConsumer>
)

export default ConnectedColorShow;

