import { ListOfFriends } from './friendlist.styled';
import { FriendlistItem } from './friendlist.styled';
import { Status } from './friendlist.styled';
import { Image } from './friendlist.styled';
import { Name } from './friendlist.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(item => (
        <FriendlistItem key={item.id}>
          <Status color={item.isOnline ? 'green' : 'red'}></Status>
          <Image src={item.avatar} alt="User avatar" />
          <Name>{item.name}</Name>
        </FriendlistItem>
      ))}
    </ListOfFriends>
  );
};
