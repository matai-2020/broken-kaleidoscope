import React from 'react'
import Pixel from './Pixel'

class App extends React.Component {
  state = {
    fontFamily: 'Times New Roman',
    height: '20px',
    width: '20px',
    backgroundColor: 'cornflowerblue'
  }

  render () {
    return (
      <div id="app">
        <Pixel
          height = {this.state.height}
          width = {this.state.width}
          backgroundColor = {this.state.backgroundColor}
        />

        <Pixel
          height = {this.state.height}
          width = {this.state.width}
          backgroundColor = {this.state.backgroundColor}
        />

        <Pixel
          height = {this.state.height}
          width = {this.state.width}
          backgroundColor = {this.state.backgroundColor}
        />

      </div>
    )
  }
}

export default App
