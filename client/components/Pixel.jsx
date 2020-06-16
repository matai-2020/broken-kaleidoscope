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

  makeGreen = () => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: 'green'
      }
    })
  }

  makeYellow = () => {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: 'yellow'
      }
    })
  }

  render () {
    return (
      <div
        onClick={this.changeColour}
        onMouseEnter={this.makeGreen}
        onMouseLeave={this.changeColour}
        onDragEnter={this.makeYellow}
        style={this.state.style}>
      </div>
    )
  }
}

export default Pixel
