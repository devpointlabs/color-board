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
						{title}
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
						{desc} 
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
  </Styles>
)


export default Board;