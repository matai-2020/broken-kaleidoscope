import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
   state = {style: {
    fontFamily: 'Times New Roman',
    width: '20px',
    height: '20px',
    backgroundColor: randomHexColor()
    }
}
  yellowOnDrag = evt => {
    this.setState({
        style: {
        width: '20px',
        height: '20px',
        backgroundColor: 'yellow'
        }
    })
  }

  greenOnMouseEnter = evt => {
    this.setState({
        style: {
        width: '20px',                
        height: '20px',
        backgroundColor: 'green'
        }
    })
}

  blackOnContextMenu = evt => {
    evt.preventDefault()
    this.setState({
        style: {
        width: '20px',                
        height: '20px',
        backgroundColor: 'black'
        }
    })
        
  }

  whiteOnDoubleClick = evt => {
    evt.preventDefault()
    this.setState({
        style: {
        width: '20px',                
        height: '20px',
        backgroundColor: 'white'
        }
    })
        
  }


 clickHandler = evt => {
     this.setState({
         style: {
            width: '5px',
            height: '5px',
            backgroundColor: randomHexColor()
            }
        })
 }
    render() {
    return (
    <div onClick={this.clickHandler} onDoubleClick={this.whiteOnDoubleClick} onMouseEnter={this.greenOnMouseEnter} onDragEnter={this.yellowOnDrag} onContextMenu={this.blackOnContextMenu} style={this.state.style}></div>
    )
}
}


export default Pixel