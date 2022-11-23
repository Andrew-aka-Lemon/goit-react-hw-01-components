import styled from 'styled-components';

const StyledFriendList = styled.ul`
  width: 200px;

  text-decoration: none;
  list-style: none;
  margin: 0 auto;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ItemFriend = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const IsOnlineMarker = styled.span`
  display: block;

  width: 15px;
  height: 15px;
  margin-right: 10px;

  border-radius: 50%;
  background-color: ${p => p.color};
`;

const Avatar = styled.img`
  margin-right: 10px;
`;

const Username = styled.p``;

export { StyledFriendList, IsOnlineMarker, ItemFriend, Avatar, Username };
