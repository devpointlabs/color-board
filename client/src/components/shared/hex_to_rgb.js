import React from 'react';

const HexTest = () => {
  const hexToRgb = (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  return(
    <>
    <h1>R:{hexToRgb("#0033ff").r}</h1>
    <h1>G:{hexToRgb("#0033ff").g}</h1>
    <h1>B:{hexToRgb("#0033ff").b}</h1>
    </>
  )
}
export default HexTest;