import React from 'react';
import { Link } from 'react-router-dom';
import { BoardConsumer } from '../../providers/BoardProvider'
import { Button } from 'react-materialize';
import Board from './Board'
import Liked from './Liked'

const Explore = () => (
	<BoardConsumer> 
    {
			value =>
				<div>
				<span style={{
					position: 'absolute',
			    left: '3rem',
			    top: '9rem',
			    fontSize: '20px',
			    fontFamily: 'Rubik',
				}}>Explore</span>
				<div style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'center',
					marginTop: '11rem',
					marginLeft: '20rem'
				}}>
					{ 
						value.boards.map( b =>
							<div 
								style={{
									marginLeft: '-3.9rem',
							 		display: 'flex', 
									flexDirection: 'column'
								}}>
								<Link to={`/boards/${b.id}`}> 
								<Board {...b} />
								</Link>
								< br/>
								< br/>
								< br/>
								< br/>
								< br/>
								< br/>
							</div>
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