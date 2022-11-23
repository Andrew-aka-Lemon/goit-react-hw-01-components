import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFriendList = styled.ul`
  width: 200px;
`;

const IsOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export default function FriendList({ friends }) {
  return (
    <StyledFriendList>
      {friends.map(({ avatar, isOnline, name, id }) => {
        return (
          <li className="item" key={id}>
            {isOnline && <IsOnline className="status"></IsOnline>}
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
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
