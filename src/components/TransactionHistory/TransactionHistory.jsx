import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHistoryHead,
  THType,
  HeaderRow,
  TableRow,
} from 'components/TransactionHistory/TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryHead>
        <tr>
          <HeaderRow>Type</HeaderRow>
          <HeaderRow>Amount</HeaderRow>
          <HeaderRow>Currency</HeaderRow>
        </tr>
      </TransactionHistoryHead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }, index) => {
          return (
            <TableRow key={id} color={index % 2 === 0 ? '#f0f0f0' : '#d8d8d8'}>
              <THType>{type}</THType>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
