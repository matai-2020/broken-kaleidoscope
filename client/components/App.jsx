import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  state = {
    fontFamily: 'Times New Roman',
    height: '20px',
    width: '20px'
  }

  render() {

    return Array.from({ length: 1000 }, (v, i) => {
      return (
        <Pixel
          height={this.state.height}
          width={this.state.width}
        />
      )
    }
    )

  }
}

export default App
