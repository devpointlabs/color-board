import React, { Component } from 'react';
import { BoardConsumer } from '../../providers/BoardProvider';

class BoardShow extends Component {
  componentDidMount() {
	  this.props.getBoard(this.props.match.params.id)
  }
  
  render() {
    const { title, desc } = this.props.board
      return(
        <div>
          <h1>Board Show</h1>
            <h2>{title}</h2>
            <h3>{desc}</h3>
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
