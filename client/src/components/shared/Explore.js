import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BoardConsumer } from '../../providers/BoardProvider'
import { Button } from 'react-materialize';
import axios from 'axios';
import Board from './Board'
import styled from 'styled-components'

const Styles = styled.div`

.center {
  margin: 0 auto;
  float: left;
}
`
class Explore extends Component {
	state = { boards: [], showLoadMore: true }

	toggleLoadMore = () => this.setState({ showLoadMore: !this.state.showLoadMore })

	loadMoreBoard = () => {
	  axios.post('/api/boards') //only bring in 8 more (uniqueId)
	  .then( res => {
	    this.setState({ boards: [ ...this.state.boards, res.data ] })
	  })
	  .catch( err => {
	    console.log(err)
	  })
	}

	render() {
	    return (
	      <Styles>
		<div>
		   {
		    this.props.boards.map( b =>
		      <Link to="/boards/${id}"> <Board {...b} /></Link>
		      )
		    }
		    <Button className="center" 
		      onClick={this.loadMoreBoard}
		    >
		      Load More
		    </Button>
		</div>
	      </Styles>
	    )
	}
}

const ConnectedExplore = (props) => (
  <BoardConsumer> 
    {
      value =>
      <Explore {...props} {...value} />
    }
  </BoardConsumer>
)

export default ConnectedExplore;
