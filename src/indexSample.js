import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

class App extends React.Component{
  render() {
    return (
      <div className='App'>
        <h1>Hello World from React !!!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

