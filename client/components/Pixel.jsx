import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      height: '50px',
      backgroundColor: 'blue',
      width: '50px'
    }
  }
  render () { 
    return (
      <div style={{
        backgroundColor: this.state.backgroundColor,
        height: this.state.height,
        width: this.state.width
      }} >

      </div>
    )
  }
}

export default Pixel
