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
 render(){
   let style = {
      textAlign: 'center',
      fontSize: '2rem',
      lineHeight: '2.3rem'
    }
    let container = {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '2rem',
      justifyContent: 'center'
    }
    let newBoard = {
      marginRight: '0.5rem',
      marginTop: '0.6rem'
    }
    let header = 'Your Color Board'
  return (
    <div>
      <div style={style}>
        <span>{header}</span>
      </div>
      <div style={container}>
        <p style={newBoard}>
          Create new board 
        </p>
      </div>
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
