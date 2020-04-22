import React from 'react';
import styled from 'styled-components'
import Liked from './Liked';

const Styles = styled.div`

.card {
  width: 17rem;
  height: 18rem;
  padding: 10px;
  margin: 2rem;
  word-wrap: break-word;
},
`

const Board = ({ title, desc }) => (
  <Styles>
    <div style={{
					padding: '5rem',
          wordWrap: 'break-word',
			    left: '4rem',
					width: '18rem',
				  height: '17rem',
          border: '1px solid lightgrey',
					//boxShadow: '-9px 11px 20px 1px lightgrey',
				}}>
					<span style={{
						position: 'relative',
				    left: '1.5rem',
				    top: '2rem',
						fontWeight: 'bold',
				    fontSize: '18px',
				    fontFamily: 'Rubik',
					}}>
						
					</span>
					<span style={{
						position: 'relative',
				    left: '2.5rem',
				    top: '9.3rem',
				    fontSize: '18px',
				    fontFamily: 'Rubik',
						overflowWrap: 'break-word',
            background: 'lightgrey',
            padding: '3px 7px 3px 7px',
            borderRadius: '9px',
            color: 'white'
					}}>
						{desc} 
					</span>	
				</div>
  </Styles>
)


export default Board;