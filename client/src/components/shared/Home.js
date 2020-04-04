import React, { Component } from 'react';

class Home extends Component {
  render() {
    let style = {
      textAlign: 'center',
      fontSize: '2rem',
      lineHeight: '2.3rem'
    }
    let header = 'Welcome to your Color Board';
    return (
      <div style={style}>
        <span>{header}</span>
      </div>
    )
  }
}
export default Home;