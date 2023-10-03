import { Table } from './transactions.styled';
import { TableHead } from './transactions.styled';
import { Row } from './transactions.styled';
import { Data } from './transactions.styled';
import { HeadItem } from './transactions.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </tr>
      </TableHead>

      <tbody>
        {transactions.map(item => (
          <Row key={item.id}>
            <Data>{item.type}</Data>
            <Data>{item.amount}</Data>
            <Data>{item.currency}</Data>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};
