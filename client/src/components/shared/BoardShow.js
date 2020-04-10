import React, { Component } from 'react';
import { BoardConsumer } from '../../providers/BoardProvider';
import BoardForm from '../board/BoardForm';

class BoardShow extends Component {
  state = { showForm: false }
  componentDidMount() {
	  this.props.getBoard(this.props.match.params.id)
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  updateBoard = () => {
    const { showForm } = this.state;
    return (
     <>
      {
        showForm ? 
        <BoardForm {...this.props} toggleForm={this.toggleForm} />
        :
        <button>
          Edit
        </button>
      }
     </>
    )
  }
  
  render() {
    const { title, desc } = this.props.board
      return(
        <div>
          <h1>Board Show</h1>
            <h2>{title}</h2>
            <h3>{desc}</h3>
            {this.updateBoard()}
        </div>
      )
  }
}
  
const ConnectedBoardShow = (props) => (
  <BoardConsumer> 
    {
      value =>
      <BoardShow {...props} {...value} />
    }
  </BoardConsumer>
)

export default ConnectedBoardShow;
