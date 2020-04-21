import React from 'react';

export default class Liked extends React.Component {
  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }
  getImageName = () => this.state.open ? 'heart' : 'minus'
  
  render() {
    //const imageName = this.getImageName();
    return(
      <img 
        style={{
          height: 'auto',
          width: '2.8rem',
          position: 'absolute',
          left: '2.6rem',
          top: '15.7rem',
          transform: 'translate(-50%, -50%)'
        }} 
        src={require('./heart.png')}
        
      />
    )
  }
}