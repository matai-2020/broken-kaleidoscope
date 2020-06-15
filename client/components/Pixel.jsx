import React from 'react'

class Pixel extends React.Component {
  state = {
    style: {
      height: '100px',
      width: '100px',
      backgroundColor: 'cornflowerblue'
    }
  }

  render () {
    return (
      <div style={this.state.style}>
      </div>
    )
  }
}

export default Pixel
