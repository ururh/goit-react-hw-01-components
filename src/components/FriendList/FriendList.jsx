import PropTypes from 'prop-types';
import { Avatar, FriendListContainer, FriendListItem, Name, Status } from './FriendList.styled';
const FriendList = ({ friends }) => {
    return(<FriendListContainer>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id}>
          <Status isOnline={isOnline} />
          <Avatar src={avatar} alt={name} />
          <Name>{name}</Name>
        </FriendListItem>
      ))}
    </FriendListContainer>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendList