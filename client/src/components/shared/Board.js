import React from 'react';
import styled from 'styled-components'

const Styles = styled.div`

.container {
  display:flex;
  justify-content: center;
  align-items: flex-stretch;
  width: 80%;
  
}

.card {
  width: 300px;
  border: 5px solid grey;
  padding: 15px;
  margin: 20px;


}
.title {
  justify-content: flex-start;
}
.desc {
  justify-content: flex-end;
}
`

const Board = ({ title, desc }) => (
  <Styles>
    <div className="container">
      <div className="card">
          <h1 className="title">{title}</h1>
          <p>{desc}</p>
      </div>
    </div>
  </Styles>
)


export default Board;