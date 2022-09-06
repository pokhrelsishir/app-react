const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Hobby</th>
        </tr>
      </thead>
    )
  }


  const TableBody = () => {
    return (
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
          <td>Monica</td>
          <td>Acting</td>
        </tr>
        <tr>
          <td>James</td>
          <td>Singing</td>
        </tr>
      </tbody>
    )
  } 


  class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )
    }
  }