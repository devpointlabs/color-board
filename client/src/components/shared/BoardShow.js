import React, { Component } from 'react';
import { BoardConsumer } from '../../providers/BoardProvider';
import BoardForm from '../board/BoardForm';
import ColorForm from './ColorForm'

class BoardShow extends Component {
  state = { showForm: false, colorForms: [] }

  componentDidMount() {
    this.props.getBoard(this.props.match.params.id)
    this.props.getBoardColors(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.clearBoard();
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  
  updateBoard = () => {
    const { showForm } = this.state;
    return (
      <>
      {
        showForm ? 
        <BoardForm {...this.props} toggleForm={this.toggleForm} />
        :
        <button onClick={() => this.toggleForm()}>
          Edit
        </button>
      }
     </>
    )
  }

  addColorForm = () => {
    const { colorForms } = this.state
    const { id } = this.props.board
    this.setState({ colorForms: [ ...colorForms, <ColorForm board_id={id}/> ]})
  }

  render() {
    const { title, desc, id } = this.props.board
      return(
        <div style={{ textAlign: "center", marginTop: '100px'}}>
            <h2>{title}</h2>
            <h3>{desc}</h3>
            {this.updateBoard()}
            <button onClick={() => this.props.deleteBoard(id)}>
              delete
            </button>
            <hr />
            { this.props.colors.map( c =>
            <> 
              <div style={{ 
                backgroundColor: `${c.hex}`,
                paddingTop: '60px', 
                height: '100px', 
                width: '150px',
                margin: 'auto',
                alignText: 'left'}}>
              <h5>{c.hex}</h5>
              </div>
              </>
              )}
            { this.state.colorForms.map( form => form) }
            { this.props.colors.length === 5 ? 
			        null 
			        :
			        <button onClick={() => this.addColorForm()}>Add Color</button>
		        }
        </div>
      )
  }
}
  
const ConnectedBoardShow = (props) => (
  <BoardConsumer> 
    {
      value =>
      <BoardShow {...props} {...value} />
    }
  </BoardConsumer>
)

export default ConnectedBoardShow;