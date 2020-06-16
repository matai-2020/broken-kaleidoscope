import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  state = {
    fontFamily: 'Times New Roman',
    height: '20px',
    width: '20px',
    backgroundColor: `cornflowerblue`
  }

  randomHexColor () {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }

  render() {
    return (
      <div id="app">
        <Pixel
          height={this.state.height}
          width={this.state.width}
          backgroundColor={this.randomHexColor()}
        />

        <Pixel
          height={this.state.height}
          width={this.state.width}
          backgroundColor={this.randomHexColor()}
        />

        <Pixel
          height={this.state.height}
          width={this.state.width}
          backgroundColor={this.randomHexColor()}
        />

      </div>
    )
  }
}

export default App
