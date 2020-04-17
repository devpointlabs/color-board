import React, { Component } from 'react';
import { ColorConsumer } from '../../providers/ColorProvider';
import ColorForm from '../shared/ColorForm';



class ColorShow extends Component {
  state = { showForm: false }
  // componentDidMount() {
  //   this.props.fetchColors(this.props.match.params.id)
  //   debugger
  // }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  updateColor = () => {
    const { showForm } = this.state;
    return (
     <>
      {
        showForm ? 
        <ColorForm {...this.props} toggleForm={this.toggleForm} />
        :
        <button onClick={() => this.toggleForm()}>
          Edit
        </button>
      }
    
     </>
    )
  }
  
  render() {
    const { board_id, colorName, hex, id } = this.props.location.state.color
      return(
        <>
        <div style={{
          width: '100%',
          margin: '150px',
        }}>

        </div>
        <div>
          
          <h1>Color Show</h1>
            <h2>{colorName}</h2>
            <div style={{
              backgroundColor: `${colorName}`,
              height: '100px',
              width: '50%',
            }}>

            </div>

            {this.updateColor()}
            <button onClick={() => this.props.deleteColor(board_id, id)}>
              delete
            </button>
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