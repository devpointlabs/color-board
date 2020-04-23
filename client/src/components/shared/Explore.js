import React from 'react';
import { Link } from 'react-router-dom';
import { BoardConsumer } from '../../providers/BoardProvider'
import { Button } from 'react-materialize';
import ConnectedBoard from './Board'
import Liked from './Liked'

const Explore = () => (
	<BoardConsumer> 
    {
			value =>
				<div st>
				<span style={{
				
			    fontSize: '20px',
			    fontFamily: 'Rubik',
				}}>Explore</span>
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					flexWrap: 'wrap',
					margin: '15rem 0 0 20rem'
				}}>
	
					{ 
						value.boards.map( b =>
							<Link to={`/boards/${b.id}`}> 
							<ConnectedBoard {...b} />
							</Link>
							)
					}
				</div>
				<div style={{textAlign: 'center'}}>
				<button style={{
					alignItems: 'center',
			    border: 'none',
			    borderRadius: '40px',
			    background: '#EF94C6',
			    padding: '14px 30px 14px 30px',
			    fontSize: '16px',
			    fontFamily: 'Rubik',
					color: 'white'
				}}>
					Load More
				</button>
				</div>
			</div>
		}
	</BoardConsumer>
)

export default Explore;