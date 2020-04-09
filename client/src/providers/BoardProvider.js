import React, { Component } from 'react';
import axios from 'axios';

const BoardContext = React.createContext()
export const BoardConsumer = BoardContext.Consumer;

class BoardProvider extends Component {
  state = { boards: [] }

  componentDidMount() {
    axios.get('/api/boards')
    .then( res => {
      this.setState({ boards: res.data });
    })
    .catch( err => {
      console.log(err);
    })
  }

  addBoard = (board) => {
    axios.post('/api/boards', board)
    .then( res => {
      const { boards } = this.state;
      this.setState({ boards: [...boards, res.data]})
    })
    .catch( err => {
      console.log(err);
    })
  }

  updateBoard = (id, board) => {
    axios.put(`/api/boards/${id}`, board)
      .then( res => {
        const { boards } = this.state.boards.map( b => {
        if (b.id === id)
          return res.data;
        return b;
      });
      this.setState({ boards });
    })
    .catch( err => {
      console.log(err);
    })
  }

  deleteBoard = (id) => {
    axios.delete(`/api/boards/${id}`)
      .then( res => {
        const { boards } = this.state;
        this.setState({ boards: boards.filter(b => b.id !== id) })
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return(
     <BoardContext.Provider value={{
        ...this.state,
        componentDidMount: this.componentDidMount,
        addBoard: this.addBoard,
        updateBoard: this.updateBoard,
        deleteBoard: this.deleteBoard
      }}>
        { this.props.children }
      </BoardContext.Provider>
    )
  }
}

export default BoardProvider;
