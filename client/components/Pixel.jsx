import React from 'react'

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`

class Pixel extends React.Component {
 state = {
   style: {
     backgroundColor: randomHexColor(),
     height: '150px',
     width: '150px'
   }
 }

 clickHandler = () => {
   this.setState({
     style: {
       ...this.state.style,
       backgroundColor: randomHexColor()
     }
   })
 }

 mouseHandler = () => {
   this.setState({
     style: {
       ...this.state.style,
       backgroundColor: randomHexColor()
     }
   })
 }

 componentDidMount () {
   this.timerID = setInterval(
     () => this.tick(),
     100
   )
 }

 componentWillUnmount () {
   clearInterval(this.timerID)
 }

 tick () {
   this.setState({
     style: {
       ...this.state.style,
       backgroundColor: randomHexColor()
     }
   })
 }

 render () {
   return (
     <div onClick={this.clickHandler} onMouseMove={this.mouseHandler} style = {this.state.style} >
     </div>
   )
 }
}


export default Pixel
