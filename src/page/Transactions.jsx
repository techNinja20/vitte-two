import TableRow from "../components/TableRow"
import "../css/transactions.css"

const tableData = [
  {
    id: 1,
    name: "Olawale",
    transactionType: "Successful",
    date: "20-03-2026",
        amount: "10000",
    color:"green"
  },
  {
    id: 2,
    name: "Kenny Gold",
    transactionType: "Failed",
    date: "01-04-2026",
      amount: "20",
     color:"red"
  },
  {
    id: 3,
    name: "Hassan",
    transactionType: "Pending",
    date: "16-04-2026",
      amount: "5000",
     color:"orange"
  },
  {
    id: 4,
    name: "Halimah",
    transactionType: "Successful",
    date: "17-04-2026",
      amount: "7000",
     color:"green"
  },
]

const Transactions = () => {
  return (
    <div>
      <h1>Transactions</h1>

      <table className="styled-table">
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Transaction type</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>

        {tableData.map((ele) => (
          //   <tr>
          //     <td>{ele.id}</td>
          //     <td>{ele.name}</td>
          //     <td>{ele.transactionType}</td>
          //     <td>{ele.date}</td>
          //     <td>${ele.amount}</td>
          //   </tr>
          <TableRow key={ele.id} {...ele} />
        ))}
      </table>
    </div>
  )
}

export default Transactions
