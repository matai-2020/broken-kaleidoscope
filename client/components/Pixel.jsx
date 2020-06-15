import React from 'react'

class Pixel extends React.Component {
  state = {
    color: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }

  render () {
    return (
      <div style={{
        height: '50px',
        width: '50px',
        backgroundColor: this.state.color

      }}>

      </div>
    )
  }
}

export default Pixel
