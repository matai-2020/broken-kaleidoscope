import React from 'react'

class Pixel extends React.Component {

  state ={
    backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }

  clickHandler = (evt) => {
    this.setState({
      backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    })
  }

  mouseEnter = (evt) => {
    this.setState({
      backgroundColor: 'green'
    })
  }

  onDoubleClick = (evt) => {
    this.setState({
      backgroundColor: 'white'
    })
  }

  onDragEnter = (evt) => {
    this.setState({
      backgroundColor: 'yellow'
    })
  }

  render () {
    return (
      <div style={{
        height: this.props.height,
        width: this.props.width,
        backgroundColor: this.state.backgroundColor
      }}
      onClick={this.clickHandler}
      onMouseEnter={this.mouseEnter}
      onDoubleClick={this.onDoubleClick}
      onDragEnter={this.onDragEnter}
      >
      </div>
    )
  }
}

export default Pixel
