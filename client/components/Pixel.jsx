import React from 'react'

class Pixel extends React.Component {
  constructor () {
    super()
    this.state = {
      style: {
        height: '3px',
        backgroundColor: this.randomHexColor(),
        width: '3px'
      }
    }
  }

  randomHexColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

  clickHandler = () => {
    this.setState({
      style: {
        backgroundColor: this.randomHexColor(),
        height: '3px',
        width: '3px'
      }
    })
  }

  hoverHandler = () => {
    this.setState({
      style: {
        backgroundColor: 'green',
        height: '3px',
        width: '3px'
      }
    })
  }

  exitHandler = () => {
    this.setState({
      style: {
        backgroundColor: this.randomHexColor(),
        height: '3px',
        width: '3px'
      }
    })
  }

  blackClick = () => {
    this.setState({
      style: {
        backgroundColor: 'black',
        height: '3px',
        width: '3px'
      }
    })
    event.preventDefault()
  }

  whiteClick = () => {
    this.setState({
      style: {
        backgroundColor: 'white',
        height: '3px',
        width: '3px'
      }
    })
  }

  yellowTown = () => {
    this.setState({
      style: {
        backgroundColor: 'yellow',
        height: '3px',
        width: '3px'
      }
    })
  }

  render () {
    return (
      <div style={this.state.style}
        onClick={this.clickHandler}
        onMouseEnter={this.hoverHandler}
        // onMouseLeave={this.exitHandler}
        onContextMenu={this.blackClick}
        onDoubleClick={this.whiteClick}
        onDragEnter={this.yellowTown}
      >

      </div>
    )
  }
}

export default Pixel
