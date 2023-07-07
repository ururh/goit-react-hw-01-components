import { TransactionTable } from "./TransactionHistory.style"

const TransactionHistory = ({items}) => {
    return(<TransactionTable className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map(({ id, type, amount, currency }) => {
        return(<tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)
    })}
  </tbody>
</TransactionTable>)
}

export default TransactionHistory