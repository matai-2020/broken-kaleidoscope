import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
  state = {
    style: {
      height: '100px',
      width: '100px',
      backgroundColor: randomHexColor()
    }
  }

  changeColour = () => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: randomHexColor()
      }
    })
  }

  render () {
    return (
      <div
        onClick={this.changeColour}
        style={this.state.style}>
      </div>
    )
  }
}

export default Pixel
