import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  background-color: rgba(211, 211, 211, 0.3);
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  gap: 12px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(211, 211, 211, 0.4);
  border-right: 1px solid rgba(211, 211, 211, 0.4);
  &: nth-child(3) {
    border-right: none;
  }
  align-items: center;
  width: 33%;
  &:nth-child(2) {
    width: 34%;
  }
  padding: 5px 10px;
`;

export const StatsData = styled.span`
  font-size: 12px;
  font-weight: 600;
`;

export const StatsTitle = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #2f4f4f;
`;
