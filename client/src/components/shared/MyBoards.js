import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BoardConsumer } from '../../providers/BoardProvider'
import { AuthConsumer } from '../../providers/AuthProvider'
import ConnectedBoard from './Board';

class MyBoards extends Component {

	componentDidMount() {
		this.props.getUserBoards();
	}

	render() {
		return(
			<div>
				<h2 style={{
						fontFamily: 'Rubik',
						textAlign: 'center'
					}}>My Boards</h2>
				<div style={{
					display: 'flex',
					flexDirection: 'column',
					flexWrap: 'wrap',
					margin: '5rem 0 0 5rem'
				}}>
					{ 
						this.props.userBoards.map( b =>
							{
								if (b.user_id === this.props.user.id) {
									return(
										<div 
											style={{
												display: 'flex', 
												flexDirection: 'row',
												marginBottom: '2rem'
											}}>
											<Link to={`/boards/${b.id}`}> 
												<ConnectedBoard {...b} />
											</Link>
										</div>
									)
								}
							}
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
							color: 'white',
							marginBottom: '20px',
						}}>
							Load More
						</button>
				</div>
			</div>
		)
	}
}

const AuthMyBoards = (props) => (
  <AuthConsumer>
    {
			value =>
      <MyBoards {...value} {...props}/>
    }
  </AuthConsumer>
)

const ConnectedMyBoards = (props) => (
  <BoardConsumer>
    {
      value =>
      <AuthMyBoards {...value} {...props}/>
    }
  </BoardConsumer>
)

export default ConnectedMyBoards;
