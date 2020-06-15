import React from 'react'

class Pixel extends React.Component {
 state = {
   fontFamily: 'Times New Roman',
   backgroundColor: 'blue',
   height: '100px',
   width: '100px'
 }

 render () {
   return (
     <div style ={{
       fontFamily: this.state.fontFamily,
       backgroundColor: this.state.backgroundColor,
       height: this.state.height,
       width: this.state.width
     }}>
     </div>
   )
 }
}

export default Pixel
