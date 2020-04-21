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
					position: 'absolute',
			    left: '4rem',
			    top: '13rem',
					width: '20rem',
				  height: '18rem',
					borderTopLeftRadius: '10px',
					borderBottomLeftRadius: '10px',
					boxShadow: '-9px 11px 20px 1px lightgrey',
				}}>
					<span style={{
						position: 'absolute',
				    left: '1.5rem',
				    top: '2rem',
						fontWeight: 'bold',
				    fontSize: '18px',
				    fontFamily: 'Rubik',
					}}>
						Board Name
					</span>
					<span style={{
						position: 'absolute',
				    left: '1.5rem',
				    top: '5.5rem',
				    fontSize: '18px',
				    fontFamily: 'Rubik',
						wordWrap: 'break-word',
						paddingRight: '3rem'
					}}>
						Totally rad descriptive placeholder text 
					</span>
					<img src={require('./user.png')} style={{
						height: 'auto',
				    width: '2.8rem',
				    position: 'absolute',
				    right: '-0.3rem',
				    top: '15.5rem',
				    transform: 'translate(-50%, -50%)'
					}} />
					
					<Liked />
					
				</div>
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