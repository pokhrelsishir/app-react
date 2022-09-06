import React, { Component } from 'react'

class Table extends Component {
  render() {
    return (

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jack</td>
            <td>Drawing</td>
          </tr>
          <tr>
            <td>John</td>
            <td>Travelling</td>
          </tr>
          <tr>
            <td>Monika</td>
            <td>Acting</td>
          </tr>
          <tr>
            <td>James</td>
            <td>Singing</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table