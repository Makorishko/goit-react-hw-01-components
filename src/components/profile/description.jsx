import { DescriptionContainer } from './description.styled';
import { Image } from './description.styled';
import { Data } from './description.styled';
import { DataName } from './description.styled';

export const Description = ({ avatar, username, tag, location }) => {
  return (
    <DescriptionContainer>
      <Image src={avatar} alt="User avatar" />
      <DataName>{username}</DataName>
      <Data>{tag}</Data>
      <Data>{location}</Data>
    </DescriptionContainer>
  );
};
