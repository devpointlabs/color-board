import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BoardProvider from '../../providers/BoardProvider'
import { Button } from 'react-materialize';
import axios from 'axios';

class ExplorePage extends Component {
state = { boards: [], showLoadMore: true }

componentDidMount = () => {
  axios.get('/api/boards')
  .then( res => {
    this.setState({ boards: res.data })  //add first 8 boards
  })
  .catch( err => {
    console.log(err)
  })
}

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
                <Board />
                )
            }
							<Button onClick={this.loadMoreBoard}>Load More</Button>
					</div>
			)
	}

}

export default ExplorePage;