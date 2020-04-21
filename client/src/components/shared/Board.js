import React from 'react';
import styled from 'styled-components'

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
    <div className="card">
        <p style={{
          position: 'absolute',
          bottom: '-2.4rem',
          left: '8.5rem',
          transform: 'translate(-50%, -50%)',
			    marginTop: '8rem',
			    fontSize: '20px',
			    fontFamily: 'Rubik',
          color: 'black',
          background: '#DADBDC',
          opacity: '0.5',
          padding: '4px 14px 4px 14px',
          borderRadius: '25px'
        }}>{desc}</p>
    </div>
  </Styles>
)


export default Board;