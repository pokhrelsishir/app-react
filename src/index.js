import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World from React !!!</h1>
      </div>
    )
  }
}
//Comment
ReactDOM.render(<App />, document.getElementById('root'))