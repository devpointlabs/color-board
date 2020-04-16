import React, { Component } from 'react';
import { ColorConsumer } from '../../providers/ColorProvider';



class ColorShow extends Component {
  state = { }
  componentDidMount() {
	  this.props.getColor(this.props.match.params.id)
  }

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
      <button>
          Delete
      </button>
     </>
    )
  }
  
  render() {
    const { name, hex } = this.props.color 
      return(
        <div>
          <h1>Color Show</h1>
            <h2>{name}</h2>
            <h3>{hex}</h3>
            {this.updateColor()}
            {this.deleteColor()}
        </div>
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