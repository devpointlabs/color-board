import React, { useState } from 'react';

function NewColor() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  var numToHex = function (num) { 
    var hex = Number(num).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };

  var fullHex = function(r,g,b) {   
    var red = numToHex(r);
    var green = numToHex(g);
    var blue = numToHex(b);
    return '#'+red+green+blue;
  };

  return (
    <div style={{
      width: '300px',
      margin: 'auto',
      textAlign: 'center',
      padding: '10px',
      outline: '2px solid #43A69A'
    }}>
    <div>
      <p>Red: {red}</p>
      <input 
        type='range' 
        min={0} 
        max={255} 
        value={red} 
        onChange={(e) => setRed(e.target.value)}
        />
    </div>
    <div>
      <p>Green: {green}</p>
      <input 
        type='range' 
        min={0} 
        max={255} 
        value={green} 
        onChange={(e) => setGreen(e.target.value)}
        />
    </div>
    <div>
      <p>Blue: {blue}</p>
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
    </div>
  );
}

export default NewColor;

