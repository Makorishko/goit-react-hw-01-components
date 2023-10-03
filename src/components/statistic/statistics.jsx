import { StatsList } from './statistics.styled';
import { StatsItem } from './statistics.styled';
import { StatsSection } from './statistics.styled'; 

import { StatsTitle } from './statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <StatsTitle >{title}</StatsTitle>}

      <StatsList>
        {stats.map(item => (
          <StatsItem color={getRandomHexColor()} key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};
