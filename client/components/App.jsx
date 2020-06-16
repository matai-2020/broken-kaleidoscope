import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  state = {
    fontFamily: 'Times New Roman',
    height: '20px',
    width: '20px',
  }

  render () {
    return (
      <div id="app">
        <Pixel
          height={this.state.height}
          width={this.state.width}
        />

        <Pixel
          height={this.state.height}
          width={this.state.width}
        />

        <Pixel
          height={this.state.height}
          width={this.state.width}

        />

      </div>
    )
  }
}

export default App
