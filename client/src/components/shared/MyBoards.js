import React from 'react';
import NewBoard from './NewBoard'

export default class MyBoards extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boards:[],
      boardItem:{
        text:'', key:''
      }
    }
  }
 render() {
  return (
    <div>
      <span style={{
        position: 'absolute',
        left: '3rem',
        top: '9rem',
        fontSize: '20px',
        fontFamily: 'Rubik'
      }}>My Boards</span>
      <p>{this.state.boards.text}</p>
      <NewBoard 
        items={this.state.boards} 
        deleteBoard={this.deleteBoard} 
        updateBoard={this.updateBoard}
      />
    </div>
  ); 
 }
}
