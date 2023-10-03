import styled from 'styled-components';



export const StatsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  border: 1px solid rgba(211, 211, 211, 0.4);
  
`;

export const StatsTitle = styled.h2`
  color: grey;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  margin: 30px;
`;



export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  max-width: 400px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  width: 80px;
  height: 75px;

  span {
    color: white;
  }
  .percentage {
    font-size: 18px;
  }
`;
