import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
   state = {style: {
    fontFamily: 'Times New Roman',
    width: '50px',
    height: '50px',
    backgroundColor: randomHexColor()
    }
}
 clickHandler = evt => {
     this.setState({
         style: {
            fontFamily: 'Times New Roman',
            width: '50px',
            height: '50px',
            backgroundColor: randomHexColor()
            }
        })
 }
    render() {
    return (
    <div onClick={this.clickHandler} style={this.state.style}></div>
    )
}
}

export default Pixel