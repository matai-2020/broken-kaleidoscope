import React from 'react'

class Pixel extends React.Component {
  state = {
    color: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }

  clickHandler = evt => {
    this.setState({
      color: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    })
  }

  mouseEnterHandler = () => {
    this.setState({
      color: 'green'
    })
  }

  dragHandler = () => {
    this.setState({
      color: 'yellow'
    })
  }

  render () {
    return (
      <div style={{
        height: '50px',
        width: '50px',
        backgroundColor: this.state.color
      }} onClick={this.clickHandler}
      onMouseEnter={this.mouseEnterHandler}
      onDragEnter={this.dragHandler}>

      </div>
    )
  }
}

export default Pixel
