import styled from 'styled-components';

const TransactionHistoryTable = styled.table`
  width: 300px;
  margin: 0 auto;

  text-align: center;
`;

const TransactionHistoryHead = styled.thead`
  padding-top: 10px;

  background-color: #30b4f6;
  color: #fff;

  text-transform: uppercase;
`;

const HeaderRow = styled.th`
  padding: 10px 0;
`;

const THType = styled.td`
  text-transform: capitalize;
  text-align: left;
  padding-left: 20px;
`;

const TableRow = styled.tr`
  background-color: ${p => p.color};
`;

export {
  TransactionHistoryTable,
  TransactionHistoryHead,
  HeaderRow,
  TableRow,
  THType,
};
