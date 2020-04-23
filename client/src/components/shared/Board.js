import React, { Component, Link } from 'react';
import { BoardConsumer } from '../../providers/BoardProvider'

import styled from 'styled-components'
class Board extends Component {
  componentDidMount() {
    this.props.getBoardColors(this.props.id)
  }
  render() {
    const { title, desc, id } = this.props
    return (
      
      <div style={{
        display: 'flex',
        flexFlow: 'flex-direction'
      }}>
      <div style={{
        width: '20rem',
        height: '17rem',
        border: 'none',
        color: 'offwhite',
        borderRadius: '10px 0 0 10px',
        boxShadow: '-9px 11px 20px 1px lightgrey',
      }}>
      <h3>{title}</h3>
      <span>{desc}</span>
      
      
        <img src={require('./heart.png')}
          style={{
            marginTop: '13.5rem',
            marginLeft: '1.5rem',
            width: '2.5rem',
            height: 'auto'
          }}
        />
      </div>
      // { this.props.colors.map( c =>
      // <> 
      //   <div style={{ 
      //     backgroundColor: `${c.hex}`, 
      //     width: '20rem',
      //     height: '17rem',
      //         wordWrap: 'break-word',
      //         border: '1px solid lightgrey',
      //         //boxShadow: '-9px 11px 20px 1px lightgrey',
      //     }}>
      //     <Link  
      //       to={{ pathname:`/boards/${this.props.id}/colors/${c.id}`, 
      //       state: {color: {...c}} }}>
      //       <span style={{
      //         fontWeight: 'bold',
      //         fontSize: '18px',
      //         fontFamily: 'Rubik',
      //       }}>
      //       </span>
      //       <span style={{
      //         fontSize: '18px',
      //         fontFamily: 'Rubik',
      //         overflowWrap: 'break-word',
      //         background: 'lightgrey',
      //         padding: '3px 7px 3px 7px',
      //         borderRadius: '9px',
      //         color: 'white'
      //       }}>
      //       {c.hex}
      //       </span>	
      //     </Link>
      //   </div>
      //   </>
      // )}
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