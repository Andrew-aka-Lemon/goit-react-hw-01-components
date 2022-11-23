import PropTypes from 'prop-types';

import {
  StyledFriendList,
  IsOnlineMarker,
  ItemFriend,
  Avatar,
  Username,
} from 'components/FriendList/Friendlist.styled';

export default function FriendList({ friends }) {
  return (
    <StyledFriendList>
      {friends.map(({ avatar, isOnline, name, id }) => {
        return (
          <ItemFriend key={id}>
            {<IsOnlineMarker color={isOnline ? 'green' : 'red'} />}
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Username>{name}</Username>
          </ItemFriend>
        );
      })}
    </StyledFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
