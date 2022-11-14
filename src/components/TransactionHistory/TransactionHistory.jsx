import PropTypes from 'prop-types';
import styles from './styles.module.css';

function TransactionHistory({ items }) {
  return (
    <div>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th className={styles.head}>Type</th>
            <th className={styles.head}>Amount</th>
            <th className={styles.head}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={styles.row}>
              <td className={styles.col}>{type}</td>
              <td className={styles.col}>{amount}</td>
              <td className={styles.col}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;