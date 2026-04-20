
const TableRow = ({ id, name, transactionType, date, amount, color }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td style={{ color: color }}>{transactionType}</td>
      <td>{date}</td>
      <td>${amount}</td>
    </tr>
  )
}

export default TableRow
