import React, { Component } from 'react';

class MyBoards extends Component {
  render() {
    let style = {
      textAlign: 'center',
      fontSize: '2rem',
      lineHeight: '2.3rem',
      marginTop: '1rem'
    }
    let header = 'My Boards';
    return (
      <div style={style}>
        <span>{header}</span>
      </div>
    )
  }
}
export default MyBoards;