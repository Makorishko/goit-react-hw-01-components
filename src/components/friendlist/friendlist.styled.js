import styled from 'styled-components';

export const ListOfFriends = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListItem = styled.li`
  border: 1px solid lightgrey;
  box-shadow: 5px 2px 2px lightgrey;
  padding: 10px;
  width: 200px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Status = styled.span`
  display: inline-block;
  background-color: ${({ color }) => color};
  width: 15px;
  height: 15px;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 48px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
