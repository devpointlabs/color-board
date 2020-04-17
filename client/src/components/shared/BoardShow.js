import React, { Component } from 'react';
import { Button } from 'react-materialize';
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
            {this.updateBoard()}

            <Button onClick={() => this.props.deleteBoard(id)}>
              delete
            </Button>
            </div>

           
            { this.props.colors.map( c =>
            <> 
              <div style={{ 
                backgroundColor: `${c.hex}`,
                padding: 'auto', 
                height: '100px', 
                width: '50%',
                margin: 'auto'}}>
              <h5 style={styles.h5}>{c.hex}</h5>
              </div>
              </>
              )}
            { this.state.colorForms.map( form => form) }
            { this.props.colors.length === 5 ? 
			        null 
			        :
              <Button style={styles.centerButton}
              onClick={() => this.addColorForm()}>Add Color</Button>
		        }
        </>
      )
  }
}
  
const styles = {
  h5: {
    color: 'white',
    paddingTop: '65px',
    textAlign: 'center'
  },

  centerButton: {
    margin: 'auto',
    textAlign: 'center'
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