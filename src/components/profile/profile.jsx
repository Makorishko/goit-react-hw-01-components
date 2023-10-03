import { Description } from './description';
import { Stats } from './stats';
import { ProfileContainer } from './profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
    </ProfileContainer>
  );
};
