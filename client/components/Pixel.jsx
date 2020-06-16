import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
 state = {
   style: {
     fontFamily: 'Times New Roman',
     backgroundColor: randomHexColor(),
     height: '15px',
     width: '15px'
   }
 }

 clickHandler = () => {
   this.setState({
     style: {
       fontFamily: 'Times New Roman',
       backgroundColor: randomHexColor(),
       height: '15px',
       width: '15px'
     }
   })
 }

 mouseHandler = () => {
   this.setState({
     style: {
       fontFamily: 'Times New Roman',
       backgroundColor: randomHexColor(),
       height: '15px',
       width: '15px'
     }
   })
 }

 render () {
   return (
     <div onClick={this.clickHandler}  onMouseMove={this.mouseHandler} style = {this.state.style}>
     </div>
   )
 }
}

export default Pixel
