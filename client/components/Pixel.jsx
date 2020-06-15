import React from 'react'

class Pixel extends React.Component {
  state = {
    color: 'blue'
  }

  render () {
    return (
      <div style={{
        height: '50px',
        width: '50px',
        backgroundColor: this.state.color
      }}></div>
    )
  }
}

export default Pixel
