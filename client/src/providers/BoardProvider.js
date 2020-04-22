import React, { Component } from 'react';
import axios from 'axios';


const BoardContext = React.createContext()
export const BoardConsumer = BoardContext.Consumer;

class BoardProvider extends Component {
  state = { boards: [], board: {}, colors: [] }

  componentDidMount() {
    axios.get('/api/boards')
    .then( res => {
      this.setState({ boards: res.data });
    })
    .catch( err => {
      console.log(err);
    })
  }

  getBoard = (id) => {
    axios.get(`/api/boards/${id}`)
    .then( res => {
      this.setState({ board: res.data })
    })
    .catch( err => {
      console.log(err);
    })
  }
  
  addBoard = (board, history) => {
    axios.post('/api/boards', board)
    .then( res => {
      const { boards } = this.state;
      this.setState({ boards: [...boards, res.data]});
      history.push(`/boards/${res.data.id}`)
    })
    .catch( err => {
      console.log(err);
    })
  }

  updateBoard = (id, board, history) => {
    axios.put(`/api/boards/${id}`, board)
      .then( res => {
        const { boards } = this.state.boards.map( b => {
        if (b.id === id)
          return res.data;
        return b;
      });
      this.setState({ boards });
      history.go()
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
        window.location.href = '/'
      })
      .catch( err => {
        console.log(err);
      })
  }

  getBoardColors = (id) => {
    axios.get(`/api/board_colors/${id}`)
    .then ( res => {
      this.setState({ colors: res.data })
    })
    .catch( err => {
      console.log(err);
    })
  }

  clearBoard = () => {
    this.setState({ board: {} })
  }

  render() {
    return(
     <BoardContext.Provider value={{
        ...this.state,
        componentDidMount: this.componentDidMount,
        addBoard: this.addBoard,
        updateBoard: this.updateBoard,
        deleteBoard: this.deleteBoard,
        getBoard: this.getBoard,
        getBoardColors: this.getBoardColors,
        clearBoard: this.clearBoard
      }}>
        { this.props.children }
      </BoardContext.Provider>
    )
  }
}

export default BoardProvider;
