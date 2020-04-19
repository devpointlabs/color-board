import React from 'react';
import { Link } from 'react-router-dom';
import { BoardConsumer } from '../../providers/BoardProvider'
import { Button } from 'react-materialize';
import Board from './Board'
import styled from 'styled-components'

const Styles = styled.div`
	.center {
		margin-top: 100px;
		float: left;
	}
`

const Explore = () => (
	<BoardConsumer> 
    {
			value =>
			<Styles>
				<div style={{ 
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '100px',
                textAlign: 'center',
              }}>
					{ 
						value.boards.map( b =>
							<Link to={`/boards/${b.id}`}> 
								<Board {...b} />
							</Link>
							)
					}
					<Button>
						Load More
					</Button>
				</div>
			</Styles>
		}
	</BoardConsumer>
)

export default Explore;