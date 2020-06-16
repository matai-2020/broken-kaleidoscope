import React from 'react'

function Pixel (props) {
  return (
    <div style={{
      height: props.height,
      width: props.width,
      backgroundColor: props.backgroundColor
    }}
    onClick={props.clickHandler}>
    </div>
  )
}

export default Pixel
