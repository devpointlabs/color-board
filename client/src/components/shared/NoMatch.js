import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    let style = {
      textAlign: 'center',
      fontSize: '2rem',
      lineHeight: '2.3rem',
      marginTop: '1rem'
    }
    let header = 'Bro, where you at?';
    return (
      <div>
        <div style={style}>
          <span>{header}</span>
        </div>
        
        <span>
          Page not found return<Link to="/"> Home</Link>
        </span>
      </div>
    )
  }
}
export default NoMatch;