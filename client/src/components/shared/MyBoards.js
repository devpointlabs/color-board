import React from 'react';
import { Link } from 'react-router-dom';
import { BoardConsumer } from '../../providers/BoardProvider'
import { AuthConsumer } from '../../providers/AuthProvider'
import Board from './Board';
import styled from 'styled-components';

const Styles = styled.div`
	.center {
		margin-top: 100px;
		float: left;
	}
`

const MyBoards = ({ user }) => (
	<BoardConsumer> 
    {
			value =>
			<Styles>
				<div style={{ 
          display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'center',
					margin: '15rem 0 0 20rem'
              }}>
				<span 
					style={{
						position: 'absolute',
						left: '3rem',
						top: '9rem',
						fontSize: '20px',
						fontFamily: 'Rubik',
					}}>
					My Boards
				</span>
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
              {
                if (b.user_id === user.id) {
                  return(
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
              }
              )
              
					}
				</div>
			</Styles>
		}
	</BoardConsumer>
)

const ConnectedMyBoards = (props) => (
  <AuthConsumer>
    {
      value =>
      <MyBoards {...value} {...props}/>
    }
  </AuthConsumer>
)

export default ConnectedMyBoards;
