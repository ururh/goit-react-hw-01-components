import { TransactionTable } from "./TransactionHistory.style"
import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory