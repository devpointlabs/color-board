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
			    top: '13rem',
					width: '20rem',
				  height: '18rem',
          border: '1px solid lightgrey'
					//boxShadow: '-9px 11px 20px 1px lightgrey',
				}}>
					<span style={{
						
				    left: '1.5rem',
				    top: '2rem',
						fontWeight: 'bold',
				    fontSize: '18px',
				    fontFamily: 'Rubik',
					}}>
						{title}
					</span>
					<span style={{
						
				    left: '1.5rem',
				    top: '5.5rem',
				    fontSize: '18px',
				    fontFamily: 'Rubik',
						wordWrap: 'break-word',
						paddingRight: '3rem'
					}}>
						{desc} 
					</span>
					<img src={require('./user.png')} style={{
					  height: '1.8rem',
				    width: '1.8rem',
				    
				    right: '-0.3rem',
				    top: '15.5rem',
				    
					}} />
					
					<Liked />
					
				</div>
  </Styles>
)


export default Board;