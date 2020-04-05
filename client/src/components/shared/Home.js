import React from 'react';
import NewBoard from './NewBoard'

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      boards:[],
      boardItem:{
        text:'', key:''
      }
    }
    this.addBoard = this.addBoard.bind(this);
    this.userInput = this.userInput.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
  }
  addBoard(e){
    e.preventDefault();
    const newItem = this.state.boardItem;
    // validation
    if(newItem.text !== ''){
      const boards = [...this.state.boards, newItem];
    this.setState({
      boards: boards,
      boardItem:{ 
        text:'', key:''
      }
    })
    }
  }
  userInput(e){
    this.setState({
      boardItem:{
        text: e.target.value,
        // flipmove requires keybinding to work
        key: Date.now()
      }
    })
  }
  deleteBoard(key){
    const filteredItems= this.state.boards.filter(item =>
      item.key!==key);
    this.setState({
      boards: filteredItems
    })

  }
  updateBoard(text,key){
    const boards = this.state.boards;
    boards.map(item=>{      
      if(item.key === key){
        item.text= text;
      }
    })
    this.setState({
      boards: boards
    })
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
        <form id="to-do-form" onSubmit={this.addBoard}>
          <input 
            type="text" 
            placeholder="color" 
            style={{
              width: '4rem', 
              marginTop: '-0.1rem', 
              marginRight: '1rem'}} 
            value= {this.state.boardItem.text} 
            onChange={this.userInput} 
          />
          <button 
            type='submit' 
            class="btn-floating large blue">
            <i class="material-icons">add</i>
          </button>
        </form>
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
