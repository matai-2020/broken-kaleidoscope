import React from 'react'

class Pixel extends React.Component {
 state = {
   style: {
     fontFamily: 'Times New Roman',
     backgroundColor: 'blue',
     height: '100px',
     width: '100px'
   }
 }

 render () {
   return (
     <div style = {this.state.style}>
     </div>
   )
 }
}

export default Pixel
