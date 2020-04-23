import React, { Component } from 'react';
import { Button } from 'react-materialize';
import { BoardConsumer } from '../../providers/BoardProvider';
import BoardForm from '../board/BoardForm';
import ColorForm from './ColorForm'
import { Link } from 'react-router-dom';
import { AuthConsumer} from '../../providers/AuthProvider';

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
        <Button onClick={() => this.toggleForm()}>
          Edit
        </Button>
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
        <>
        <div style={{
          width: '100%',
          margin: '150px',
        }}>

        </div>
        <div style={{
          width: '50%',
          border: '3px solid grey',
          padding: '15px',
          marginTop: '100px',
          margin: 'auto',
          }}>
            <h2><b>{title}</b></h2>
            <h3>{desc}</h3>
            {
              this.props.user.id === this.props.board.user_id ?
              <>
                {this.updateBoard()}

                <Button onClick={() => this.props.deleteBoard(id)}>
                  delete
                </Button>
              </>
              :
              <>
              </>
            }
            </div>

           
            { this.props.colors.map( c =>
            <> 
              <div style={{ 
                backgroundColor: `${c.hex}`,
                padding: 'auto', 
                height: '100px', 
                width: '50%',
                margin: 'auto'}}>
                <Link 
                  style={styles.h5} 
                  to={{ pathname:`/boards/${this.props.match.params.id}/colors/${c.id}`, 
                  state: {color: {...c}, boardUser: this.props.board.user_id}}}>
                  {c.hex}
                </Link>
              </div>
              </>
            )}
            { this.state.colorForms.map( form => form) }
            { this.props.colors.length === 5 ? 
			        null 
              :
              <div style={{ 
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '25px',
                textAlign: 'center',
              }}>
                {
                  this.props.user.id === this.props.board.user_id ?
                    <Button
                    onClick={() => this.addColorForm()}>Add Color
                    </Button>
                  :
                  <>
                  </>
                }
              </div>
		        }
        </>
      )
  }
}
  
const styles = {
  h5: {
    color: 'white'
  },

  centerButton: {
    marginLeft: 'auto',
		marginRight: 'auto',
    textAlign: 'center'
  }
}


const BoardBoardShow = (props) => (
  <BoardConsumer> 
    {
      value =>
      <BoardShow {...props} {...value} />
    }
  </BoardConsumer>
)

const ConnectedBoardShow = (props) => (
  <AuthConsumer> 
    {
      value =>
      <BoardBoardShow {...props} {...value} />
    }
  </AuthConsumer>
)

export default ConnectedBoardShow;