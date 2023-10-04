import { Status } from './friendlist.styled';
import { Image } from './friendlist.styled';
import { Name } from './friendlist.styled';
import { ListItem } from './friendlist.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ListItem key={id}>
      <Status color={isOnline ? 'green' : 'red'}></Status>
      <Image src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </ListItem>
  );
};
