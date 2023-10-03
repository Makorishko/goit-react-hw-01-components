import styled from 'styled-components';

export const Table = styled.table`
  border: 1px solid lightgrey;
  width: 100%;
  max-width: 600px;
  border-spacing: 1px;
`;

export const TableHead = styled.thead`
  border-bottom: 1px solid lightgrey;
  background: rgb(72, 209, 204);
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const HeadItem = styled.th`
  padding: 10px;
  text-align: center;
`;

export const Row = styled.tr`
  &:nth-child(2n) {
    background-color: rgba(72, 209, 204, 0.1);
  }
  font-size: 10px;
  font-weight: 400;
  color: grey;
  padding: 10px;
`;

export const Data = styled.td`
  padding: 10px;
  text-align: center;
`;
