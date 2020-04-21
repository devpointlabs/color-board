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
					marginTop: '11rem',
					marginLeft: '10rem'
              }}>
          { 
            
            value.boards.map( b =>
              { 
                if (b.user_id === user.id) {
                  return(
                    <Link to={`/boards/${b.id}`}> 
                      <Board {...b} />
                    </Link>
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
