import React from 'react';
import FlipMove from 'react-flip-move';

export default function NewBoard(props){
    const boards = props.items;
    const board = boards.map(item => {
       return <div key={item.key} style={{
        marginLeft: '35rem',
        padding: '0.7rem'
        // board anim needs to be grid layout, not sure how?
      }}>
        <div style={{
          width: '10rem',
          height: '10rem',
          borderRadius: '8px',
          background: item.text, // needs conditional logic to handle unknown colors. Base colors(red, blue, green, etc) work fine
          padding: '1rem',
          marginLeft: '1rem',
          marginRight: '1rem'
        }}>
        <input 
          type="text" 
          id={item.key} 
          value={item.text} 
          onChange={(e)=>{
            props.updateBoard(e.target.value,item.key)}}
            style={{
              color: 'white',
              marginTop: '6.2rem',
              marginLeft: '-0.5rem',
              border: '1px solid lightgrey',
              borderRadius: '10px',
              width: '6.5rem',
              height: '2rem',
            
            }}
          />
        <button onClick={() => {
            props.deleteBoard(item.key)
          }}
          class="btn-floating btn-small waves-light black"
          style={{
            marginTop: '-5rem',
            marginLeft: '6.2rem',
          }}>
          <i class="material-icons">clear</i>
        </button>
      </div>
    </div>
  })
    
    return <div>
        <FlipMove duration={300}>
          {board}
        </FlipMove>
    </div>
  }