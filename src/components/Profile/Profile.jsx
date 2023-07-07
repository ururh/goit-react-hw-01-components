import PropTypes from 'prop-types';
import { Avatar, Description, Label, Location, Name, ProfileWrapper, Quantity, Stats, Tag, ListItem } from "./Profile.styled";

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ListItem>
      </Stats>
    </ProfileWrapper>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
