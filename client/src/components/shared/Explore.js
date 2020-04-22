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
					margin: '15rem 0 0 20rem'
				}}>
				<div style={{
					position: 'absolute',
			    left: '14.5rem',
			    marginTop: '8.4rem',
			    transform: 'translate(-50%, -50%)',
					width: '20rem',
				  height: '17rem',
          border: 'none',
					color: 'offwhite',
					borderRadius: '10px 0 0 10px',
					boxShadow: '-9px 11px 20px 1px lightgrey',
				}}>
					<img src={require('./heart.png')}
						style={{
							marginTop: '13.5rem',
							marginLeft: '1.5rem',
							width: '2.5rem',
							height: 'auto'
						}}
					/>
				</div>
				<div style={{
					position: 'absolute',
			    left: '14.5rem',
			    marginTop: '27.4rem',
			    transform: 'translate(-50%, -50%)',
					width: '20rem',
				  height: '17rem',
          border: 'none',
					color: 'offwhite',
					borderRadius: '10px 0 0 10px',
					boxShadow: '-9px 11px 20px 1px lightgrey',
				}}>
					<img src={require('./heart.png')}
						style={{
							marginTop: '13.5rem',
							marginLeft: '1.5rem',
							width: '2.5rem',
							height: 'auto'
						}}
					/>
				</div>
				<div style={{
					position: 'absolute',
			    left: '14.5rem',
			    marginTop: '46.5rem',
			    transform: 'translate(-50%, -50%)',
					width: '20rem',
				  height: '17rem',
          border: 'none',
					color: 'offwhite',
					borderRadius: '10px 0 0 10px',
					boxShadow: '-9px 11px 20px 1px lightgrey',
				}}>
					<img src={require('./heart.png')}
						style={{
							marginTop: '13.5rem',
							marginLeft: '1.5rem',
							width: '2.5rem',
							height: 'auto'
						}}
					/>
				</div>
					{ 
						value.boards.map( b =>
							<div 
								style={{
									
							 		display: 'flex', 
									flexDirection: 'row',
									marginBottom: '2rem'
								}}>
								<Link to={`/boards/${b.id}`}> 
								<Board {...b} />
								</Link>
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