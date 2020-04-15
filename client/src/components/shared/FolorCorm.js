import React, { useState } from 'react';
import {ColorConsumer} from '../../providers/ColorProvider';

const FolorCorm = ({addColor, updateColor, color}) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const componentDidMount = ({ board_id, hex }) => {
		if (color.board_id) {
      setRed(hexToRgb(color.hex).r);
      setGreen(hexToRgb(color.hex).g);
      setBlue(hexToRgb(color.hex).b);
		}
  }
  
 const numToHex = (num) => { 
    let hex = Number(num).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

  const fullHex = (r,g,b) => {   
    let red = numToHex(r);
    let green = numToHex(g);
    let blue = numToHex(b);
    return '#'+red+green+blue;
  };

  const hexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let color = { 
      hex: fullHex(red, green, blue), 
      colorName: fullHex(red, green, blue),
      board_id: 1
    }
    if (color.board_id) {
      updateColor(color.board_id, color.id, color)
    }else{
      addColor( color.board_id, color );
    }
  }
  
  return (
    <div style={{
      width: '300px',
      margin: 'auto',
      textAlign: 'center',
      padding: '10px',
      outline: '2px solid #43A69A'
    }}>
    <form onSubmit={() => handleSubmit()}>
    <div>
      <label>Red: {red}</label>
      <input 
        type='range' 
        min={0} 
        max={255} 
        value={red} 
        onChange={(e) => setRed(e.target.value)}
        />
    </div>
    <div>
      <label>Green: {green}</label>
      <input 
        type='range' 
        min={0} 
        max={255} 
        value={green} 
        onChange={(e) => setGreen(e.target.value)}
        />
    </div>
    <div>
      <label>Blue: {blue}</label>
      <input 
        type='range' 
        min={0} 
        max={255} 
        value={blue} 
        onChange={(e) => setBlue(e.target.value)}
        />
    </div>
    <div style={{
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      width: '280px',
      height: '110px'
    }}></div>
    <div style={{ fontWeight: 'bold' }}>Hex: {fullHex(red, green, blue)} </div>
    <button 
					type='submit' 
					class="btn-floating large #43A69A">
					<i class="material-icons">add</i>
				</button>
    </form>
    </div>
  );
}


const ConnectedFolorCorm = (props) => (
  <>
  <ColorConsumer>
  {
    value =>
    <FolorCorm {...props} {...value}/>
  }
  </ColorConsumer>
  </>
)

export default ConnectedFolorCorm;
