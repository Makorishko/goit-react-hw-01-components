import { List } from './stats.styled';
import { ListItem } from './stats.styled';
import { StatsData } from './stats.styled';
import { StatsTitle } from './stats.styled';

export const Stats = ({ stats }) => {
  return (
    <List>
      <ListItem>
        <StatsTitle>Followers</StatsTitle>
        <StatsData>{stats.followers}</StatsData>
      </ListItem>
      <ListItem>
        <StatsTitle>Views</StatsTitle>
        <StatsData>{stats.views}</StatsData>
      </ListItem>
      <ListItem>
        <StatsTitle>Likes</StatsTitle>
        <StatsData>{stats.likes}</StatsData>
      </ListItem>
    </List>
  );
};
