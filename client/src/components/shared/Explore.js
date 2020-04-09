import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BoardConsumer } from '../../providers/BoardProvider'
import { Button } from 'react-materialize';
import axios from 'axios';

class Explore extends Component {
state = { boards: [], showLoadMore: true }

toggleLoadMore = () => this.setState({ showLoadMore: !this.state.showLoadMore })

loadMoreBoard = () => {
  axios.post('/api/boards') //only bring in 8 more (uniqueId)
  .then( res => {
    this.setState({ boards: [ ...boards, res.data ] })
  })
  .catch( err => {
    console.log(err)
  })
}

	render() {
    return (
      <div>
        {
          boards.map( b =>
            <Board {...b} />
            )
        }
          <Button onClick={this.loadMoreBoard}>Load More</Button>
      </div>
    )
	}

}

const ConnectedExplore = (props) => (
  <BoardConsumer> 
    {
      value =>
      <Explore {...props} value={value} />
    }
  </BoardConsumer>
)

export default ConnectedExplore;