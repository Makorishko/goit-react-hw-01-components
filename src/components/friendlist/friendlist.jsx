import { ListOfFriends } from './friendlist.styled';
import { FriendListItem } from './friendlistitem';

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(({ avatar, name, id, isOnline }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            key={id}
            isOnline={isOnline}
          />
        );
      })}
    </ListOfFriends>
  );
};
