import React, { Component } from 'react';
import { ColorConsumer } from '../../providers/ColorProvider';
import ColorForm from '../shared/ColorForm';
import { Button, Icon } from 'react-materialize';

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
          width: '300px',
          textAlign: 'center',
          padding: '30px',
          
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
            {this.updateColor()}
            <Button onClick={() => this.props.deleteColor(board_id, id)}>
              Delete
            </Button>
            <p><Icon small>content_copy</Icon> copy to your clipboard</p>
         </div>
        </div>
        </>
      
      )
  }
}

  
const ConnectedColorShow = (props) => (
  <ColorConsumer> 
    {
      value =>
      <ColorShow {...props} {...value} />
    }
  </ColorConsumer>
)

export default ConnectedColorShow;
