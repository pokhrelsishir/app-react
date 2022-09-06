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


  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.hobby}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }


  class Table extends Component {
    render() {

        const { charData } = this.props

      return (
        <table>
          <TableHeader />
          <TableBody charData={charData}/>
        </table>
      )
    }
  }

  export default Table
