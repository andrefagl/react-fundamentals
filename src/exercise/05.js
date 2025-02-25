// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

const Box = ({className="", style, size, ...rest}) => {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div 
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...rest} />
  );
}
const smallBox = <Box size="small" style={{backgroundColor:'lightBlue',}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor:'pink',}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor:'orange',}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
