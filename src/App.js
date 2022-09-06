import React, { Component } from 'react'
import Table from './Table'


class App extends Component {
    render() {

        const characters = [
            {
              name: 'Jack',
              job: 'Drawing',
            },
            {
              name: 'John',
              job: 'Travelling',
            },
            {
              name: 'Monica',
              job: 'Acting',
            },
            {
              name: 'James',
              job: 'Singing',
            },
          ]



      return (
        <div className="container">
          <Table charData={characters}/>
          </div>
      )
    }
  }

  export default App