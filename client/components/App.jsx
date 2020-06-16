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

  clickHandler = (evt) => {
    this.setState({
      backgroundColor: this.randomHexColor()
    })
  }

  render () {
    return (
      <div id="app">
        <Pixel
          height={this.state.height}
          width={this.state.width}
          backgroundColor={this.randomHexColor()}
          clickHandler={this.clickHandler}
        />

        <Pixel
          height={this.state.height}
          width={this.state.width}
          backgroundColor={this.randomHexColor()}
          clickHandler = {this.clickHandler}

        />

        <Pixel
          height={this.state.height}
          width={this.state.width}
          backgroundColor={this.randomHexColor()}
          clickHandler = {this.clickHandler}

        />

      </div>
    )
  }
}

export default App
