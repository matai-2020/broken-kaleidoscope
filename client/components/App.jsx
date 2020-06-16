import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  return new Array(10000).fill(<Pixel />)
}

export default App
