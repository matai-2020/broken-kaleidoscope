import React from 'react'

class Pixel extends React.Component {
   state = {style: {
    fontFamily: 'Times New Roman',
    width: '50px',
    height: '50px',
    backgroundColor: 'cornflowerblue'
    }
}
    render() {
    return (
    <div style={this.state.style}></div>
    )
}
}

export default Pixel