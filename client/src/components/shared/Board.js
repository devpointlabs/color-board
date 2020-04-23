import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BoardConsumer } from '../../providers/BoardProvider';
import axios from 'axios';

class Board extends Component {
  state = { colors: [], userImg: ''}

  componentDidMount() {
    const { id, user_id } = this.props
    axios.get(`/api/board_colors/${id}`)
      .then ( res => {
        this.setState({ colors: res.data })
      })
      .catch( err => {
        console.log(err);
      })

    axios.post(`/api/user_image`, { user_id })
      .then ( res => {
        this.setState({ userImg: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    const { title, desc, id } = this.props
    return (
      <div style={{
        display: 'flex',
        flexFlow: 'flex-direction',
        marginBottom: '4rem'
      }}>
      <div style={{
        width: '20rem',
        height: '17rem',
        border: 'none',
        color: 'offwhite',
        padding: '15px',
        borderRadius: '10px 0 0 10px',
        boxShadow: '-9px 11px 20px 1px lightgrey',
        wordWrap: 'break-word',
      }}>
        <h5
          style={{
            color: 'black',
            fontWeight: 'bolder'
          }}
        >
          {title}
        </h5>
        <p
          style={{
            color: 'black',
            overflowY: 'auto',
            height: '100px',
          }}
        >
          {desc}
        </p>
        <br />
        <img src={require('./heart.png')}
          style={{
            width: '1.5rem',
            height: 'auto',
          }}
        />
        { this.state.userImg !== '' && this.state.userImg !== null ?
          <img src={ this.state.userImg }
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'cover',
              objectPosition: '50% 0',
              marginLeft: '13rem',
              borderRadius: '50%',
            }}
          />
        :
        <img src={ require('./user.png') }
            style={{
              width: '40px',
              marginLeft: '13rem',
              borderRadius: '50%',
            }}
          />  
        }
      </div>
      { this.state.colors.map( c =>
        <Link  
          to={{ 
            pathname:`/boards/${id}/colors/${c.id}`, 
            state: {color: c} 
          }}>
          <div style={{ 
              backgroundColor: `${c.hex}`, 
              width: '20rem',
              height: '17rem',
              wordWrap: 'break-word',
            }}>
            <span style={{
              fontWeight: 'bold',
              fontSize: '18px',
              fontFamily: 'Rubik',
            }}>
            </span>
            <span style={{
              position: 'relative',
              left: '7rem',
              top: '14.3rem',
              fontSize: '18px',
              fontFamily: 'Rubik',
              overflowWrap: 'break-word',
              background: 'lightgrey',
              padding: '3px 7px 3px 7px',
              borderRadius: '9px',
              color: 'white'
            }}>
            {c.hex}
            </span>	
        </div>
      </Link>
      )}
    </div>
    )
  }
}

const ConnectedBoard = (props) => (
  <BoardConsumer> 
    {
      value =>
      <Board {...props} {...value} />
    }
  </BoardConsumer>
)

export default ConnectedBoard;
